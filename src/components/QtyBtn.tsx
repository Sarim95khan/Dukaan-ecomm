import React, { FC } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const QtyBtn: FC<Props> = ({ qty, onIncrease, onDecrease }) => {
  return (
    <div className="flex justify-center items-center ">
      <button onClick={onIncrease} className="button-add w-12 h-10">
        +
      </button>
      <p className="font-bold">{qty}</p>

      <button
        onClick={onDecrease}
        className="button-decrease w-12 h-10 text-center flex justify-center items-center"
      >
        {qty === 1 ? <TrashIcon className="w-6 h-4 text-center" /> : '-'}
      </button>
    </div>
  );
};

export default QtyBtn;
