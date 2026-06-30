interface Props {

  input: string;

  setInput: (
    value: string
  ) => void;

  onSend: () => void;

  loading: boolean;
}

export default function ChatInput({
  input,
  setInput,
  onSend,
  loading,
}: Props) {

  return (
    <div className="flex gap-4">

      <input
        type="text"
        value={input}
        onChange={(e) =>
          setInput(
            e.target.value
          )
        }
        placeholder="Ask TRIPNEST AI..."
        className="flex-1 bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-400 outline-none"
      />

      <button
        onClick={onSend}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 transition px-8 rounded-2xl text-white font-semibold"
      >

        {loading
          ? "..."
          : "Send"}

      </button>

    </div>
  );
}