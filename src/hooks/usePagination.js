import { useMemo } from 'react';

export const usePagination = (totalPages) => {
    return useMemo(() => {
        let Array = []
        for (let i = 0; i < totalPages; i++) {
            Array.push(i + 1)
        }
        return Array;
    }, [totalPages])
}