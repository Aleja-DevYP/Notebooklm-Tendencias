"use client"

import {
  Book,
  User,
  Plus,
  Send,
  Sparkles,
} from "lucide-react"

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-50 border-r border-gray-200 p-4 flex flex-col flex-shrink-0">
      <div className="flex items-center gap-2 mb-8">
        <Book className="w-5 h-5 text-gray-900" />
        <span className="font-bold text-lg text-gray-900">StudyMate AI</span>
      </div>
      <nav className="space-y-1">
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-teal-100/60 text-teal-800 text-sm font-medium">
          <Book className="w-4 h-4" />
          Contabilidad
        </a>
        <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-slate-200/50 text-sm font-medium transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          Introducción a la Informática
        </a>

      </nav>
    </aside>
  )
}

function ChatHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="text-sm text-gray-600 font-medium">En línea</span>
      </div>
      <div className="w-8 h-8 rounded-full bg-green-200/50 flex items-center justify-center">
        <User className="w-4 h-4 text-gray-600" />
      </div>
    </header>
  )
}

function UserMessage() {
  return (
    <div className="self-end">
      <div className="bg-teal-100/80 rounded-2xl rounded-tr-sm px-6 py-3 max-w-xl">
        <p className="text-gray-800">
          ¿Cuál es la diferencia entre ingresos y ganancias en contabilidad?
        </p>
      </div>
    </div>
  )
}

function AIMessage() {
  return (
    <div className="w-full max-w-3xl flex gap-4">
      <div className="relative flex-shrink-0 self-start">
        <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center">
          <Book className="w-4 h-4 text-white" />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
      </div>
      <div className="flex-1 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-gray-900">Asistente Académico</span>
          <span className="bg-slate-100 rounded-full text-xs text-gray-600 font-medium px-3 py-1 flex items-center gap-1.5">
            <Book className="w-3 h-3" />
            Contexto: Contabilidad Básica
          </span>
        </div>
        <p className="text-gray-800 mb-4">Excelente pregunta. Aquí te explico la diferencia:</p>
        <ol className="list-decimal list-inside space-y-1 text-gray-800 mb-2">
          <li>
            <strong>Ingresos</strong>: Es todo el dinero que entra por ventas o servicios.
            <span className="text-xs text-gray-400"> [1]</span>
          </li>
          <li>
            <strong>Ganancias</strong>: Es lo que queda después de restar costos y gastos.
            <span className="text-xs text-gray-400"> [2]</span>
          </li>
          <li>
            Fórmula básica: Ingresos - Costos = Ganancia.
            <span className="text-xs text-gray-400"> [1]</span>
          </li>
          <li>
            Una empresa puede tener altos ingresos pero baja ganancia si sus costos son elevados.
            <span className="text-xs text-gray-400"> [3]</span>
          </li>
          <li>
            La ganancia también se llama utilidad o beneficio neto.
            <span className="text-xs text-gray-400"> [2]</span>
          </li>
        </ol>
        <p className="text-gray-800 mt-4 mb-2">Ejemplo práctico:</p>
        <div className="bg-slate-200/60 rounded-xl font-mono text-sm p-4 overflow-x-auto">
          <pre
            className="text-gray-800"
            dangerouslySetInnerHTML={{
              __html: `<span class="text-purple-600">Ingresos</span> por ventas:      $10,000\n<span class="text-purple-600">(-) Costo</span> de productos:    $4,000\n<span class="text-purple-600">(=) Ganancia</span> bruta:       $6,000\n<span class="text-purple-600">(-) Gastos</span> operativos:     $2,000\n<span class="text-purple-600">(=) Ganancia</span> neta:        $4,000`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

function ChatInput() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="bg-white border border-gray-300 rounded-full shadow-sm flex items-center px-4 py-3 gap-3">
        <button type="button" className="flex-shrink-0">
          <Plus className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Pregunta sobre tus fuentes..."
          className="flex-1 outline-none bg-transparent text-gray-800 placeholder:text-gray-400 text-sm"
        />
        <button type="button" className="flex-shrink-0">
          <Send className="w-5 h-5 text-teal-500" />
        </button>
      </div>
    </div>
  )
}

function SparkleDecoration() {
  return (
    <Sparkles className="absolute bottom-28 right-8 w-16 h-16 text-white/40 pointer-events-none" />
  )
}

export default function ChatInterface() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-cyan-50/30 relative">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          <AIMessage />
          <UserMessage />
        </div>
        <div className="p-6">
          <ChatInput />
        </div>
        <SparkleDecoration />
      </main>
    </div>
  )
}
