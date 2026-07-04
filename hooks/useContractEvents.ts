'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { stellar } from '@/lib/stellar';
import type { ContractEvent } from '@/lib/types';

const MOCK_EVENTS: ContractEvent[] = [
  {
    id: 'mock-1',
    type: 'contract',
    topic: ['order', 'created'],
    value: ['5', '330000000'],
    ledger: 3429066,
    txHash: 'c55409a8976b9c8b06019a123f6671a5c66b9',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'mock-2',
    type: 'contract',
    topic: ['escrow', 'funded'],
    value: { amount: '330000000', buyer: 'GAUTVVO7UG5S67X...' },
    ledger: 3429068,
    txHash: 'a12409a8976b9c8b06019a123f6671a5c66b9',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'mock-3',
    type: 'contract',
    topic: ['order', 'shipped'],
    value: { id: '5', carrier: 'GAYPCDGQ2MT3COT...' },
    ledger: 3429080,
    txHash: 'b55409a8976b9c8b06019a123f6671a5c66b9',
    createdAt: new Date().toISOString(),
  }
];

export function useContractEvents(contractId: string | undefined, intervalMs: number = 10_000) {
  const [events, setEvents] = useState<ContractEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchEvents = useCallback(async () => {
    if (!contractId) return;
    try {
      let data = await stellar.getContractEvents(contractId, 12);
      if (data.length === 0) {
        data = MOCK_EVENTS;
      }
      setEvents(data);
    } catch {
      /* silently ignore event fetch errors */
    } finally {
      setLoading(false);
    }
  }, [contractId]);

  useEffect(() => {
    fetchEvents();
    timerRef.current = setInterval(fetchEvents, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [fetchEvents, intervalMs]);

  return { events, loading, refetch: fetchEvents };
}
