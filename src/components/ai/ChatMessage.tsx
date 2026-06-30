interface Props {

  role:
    | "user"
    | "assistant";

  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {

  const isUser =
    role === "user";

  return (
    <div
      className={`flex ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >

      <div
        className={`max-w-[80%] px-6 py-4 rounded-[28px] shadow-lg backdrop-blur-xl ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white/10 border border-white/10 text-white"
        }`}
      >

        <p className="leading-8">

          {content}

        </p>

      </div>

    </div>
  );
}