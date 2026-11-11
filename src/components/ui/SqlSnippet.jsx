import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('sql', sql)

const DEFAULT_CODE = `-- What I do every day
SELECT
    business_insight,
    optimised_query,
    mis_report
FROM  daily_work
WHERE passion    = 'databases'
  AND role       = 'SQL Developer'
  AND location   = 'Mumbai';`

export default function SqlSnippet({ code = DEFAULT_CODE }) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl shadow-black/40 text-left"
      aria-label="Decorative SQL code snippet"
      role="img"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1117] border-b border-[var(--border)]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">query.sql</span>
      </div>
      <SyntaxHighlighter
        language="sql"
        style={atomOneDark}
        customStyle={{
          margin: 0,
          padding: '1.25rem 1.5rem',
          background: '#0D1117',
          fontSize: '0.85rem',
          lineHeight: '1.7',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
