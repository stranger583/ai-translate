import LanguageSelect from "@/components/language-select";
import TranslateTabs from "@/components/tabs";
import TranslateContainer from "@/components/translate-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <div className="w-full bg-zinc-950 p-4">
        <LanguageSelect />
      </div>
      <div className="rounded-sm overflow-hidden h-[calc(70dvh_-_72px)] w-full bg-zinc-900 border border-white">
        <TranslateContainer />
      </div>
      <div className="h-[calc(30dvh_-_36px)] w-full rounded-sm bg-zinc-900">
        <TranslateTabs />
      </div>
    </main>
  );
}
