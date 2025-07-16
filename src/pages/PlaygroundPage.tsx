import React, { useState } from 'react';
import styled from 'styled-components';

const SheetBox = styled.div`
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-top: 1rem;
  border-radius: 8px;
`;

const Cell = styled.div<{ locked: boolean }>`
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  margin: 4px;
  text-align: center;
  border: 1px solid #999;
  background-color: ${({ locked }) => (locked ? '#ccc' : '#fff')};
  cursor: pointer;
`;

const PlaygroundPage: React.FC = () => {
  const [sheets, setSheets] = useState<string[]>(['기준시트']);
  const [cells, setCells] = useState<{ id: number; locked: boolean; currency: string }[]>([
    { id: 1, locked: false, currency: 'KRW' },
    { id: 2, locked: false, currency: 'USD' },
  ]);

  const handleAddSheet = () => {
    const newSheet = `시트${sheets.length}`;
    setSheets([...sheets, newSheet]);
  };

  const toggleLock = (id: number) => {
    setCells(cells.map(cell => (cell.id === id ? { ...cell, locked: !cell.locked } : cell)));
  };

  const handleCurrencyChange = (id: number, value: string) => {
    setCells(cells.map(cell => (cell.id === id ? { ...cell, currency: value } : cell)));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>⚙️ VBA 기능 Playground</h1>

      <button onClick={handleAddSheet}>🧾 시트 생성</button>
      <ul>
        {sheets.map((sheet, idx) => (
          <li key={idx}>{sheet}</li>
        ))}
      </ul>

      <hr />

      <h3>셀 테스트 (잠금 & 통화 설정)</h3>
      <SheetBox>
        {cells.map(cell => (
          <div key={cell.id}>
            <Cell locked={cell.locked} onClick={() => toggleLock(cell.id)}>
              {cell.locked ? '🔒' : '🔓'} {cell.currency}
            </Cell>
            <select
              value={cell.currency}
              onChange={(e) => handleCurrencyChange(cell.id, e.target.value)}
              disabled={cell.locked}
            >
              <option value="KRW">KRW</option>
              <option value="USD">USD</option>
              <option value="KRW(VAT)">KRW(VAT)</option>
            </select>
          </div>
        ))}
      </SheetBox>
    </div>
  );
};

export default PlaygroundPage;
