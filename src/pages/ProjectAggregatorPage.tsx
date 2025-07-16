// src/pages/ProjectAggregatorPage.tsx
import React, { useState } from 'react';

// 시뮬레이션용 시트 데이터 구조 (sheetName → { cellRef: value })
const initialSheets: Record<string, Record<string, string>> = {
  Sheet1: { A3: '사업명1', B3: 'E5' },
  Sheet2: { A3: '사업명2', B3: 'F7' },
  Sheet3: { A3: '사업명3', B3: 'G9' },
};

const simulatedSheetValues: Record<string, Record<string, string>> = {
  Sheet1: { E5: '인력 양성' },
  Sheet2: { F7: '기술 지원' },
  Sheet3: { G9: '시스템 구축' },
};

export const ProjectAggregatorPage: React.FC = () => {
  const [sheets] = useState(initialSheets);
  const [results, setResults] = useState<{ sheet: string; value: string }[]>([]);
  const [progress, setProgress] = useState(0);

  const handleAggregate = () => {
    const entries = Object.entries(sheets);
    const total = entries.length;
    const newResults: { sheet: string; value: string }[] = [];

    entries.forEach(([sheetName, cellMap], index) => {
      const refCell = cellMap.B3; // 참조 주소
      const value = simulatedSheetValues[sheetName]?.[refCell] || '(없음)';
      newResults.push({ sheet: sheetName, value });
      setProgress(Math.round(((index + 1) / total) * 100));
    });

    setResults(newResults);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📊 사업 DB 취합</h1>

      <button
        onClick={handleAggregate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        DB 취합 실행
      </button>

      <div className="my-4">
        <div className="h-4 bg-gray-300 rounded">
          <div
            className="h-4 bg-green-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1">진행률: {progress}%</p>
      </div>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">시트명</th>
            <th className="border px-4 py-2">참조 셀 값</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{row.sheet}</td>
              <td className="border px-4 py-2">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


