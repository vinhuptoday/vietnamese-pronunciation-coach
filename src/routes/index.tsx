import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sprout, Menu, X, Check, Star, Mic, Route as RouteIcon, Gamepad2, Video,
  BarChart3, School, Quote, ArrowRight,
} from "lucide-react";
import heroChild from "@/assets/hero-child.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nảy Lời Mầm Thanh – Sửa lỗi phát âm tiếng Việt cho bé" },
      { name: "description", content: "Phát hiện lỗi phụ âm, vần, thanh điệu trong 5 phút và nhận lộ trình luyện phát âm riêng cho bé." },
      { property: "og:title", content: "Nảy Lời Mầm Thanh – Nói tròn vành rõ chữ" },
      { property: "og:description", content: "Học liệu số sửa lỗi phát âm tiếng Việt với video khẩu hình, bài luyện và trò chơi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Kiểm tra phát âm", "#kiem-tra"], ["Lộ trình", "#lo-trinh"], ["Bài học", "#loi"],
  ["Trò chơi", "#tinh-nang"], ["Góc phụ huynh", "#phu-huynh"], ["Nhà trường", "#tinh-nang"],
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <Errors />
      <Steps />
      <Features />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex min-w-0 items-center gap-2">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
        <Sprout className="h-5 w-5" />
      </span>
      <span className="truncate font-display text-xl font-bold">
        Nảy Lời <span className="text-coral">Mầm Thanh</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([l, h]) => (
            <a key={l} href={h} className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 sm:inline-block">Đăng nhập</a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-xl p-2 hover:bg-muted lg:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 lg:hidden">
          {nav.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 font-medium hover:bg-accent">{l}</a>
          ))}
          <a href="#" className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center font-semibold text-primary-foreground">Đăng nhập</a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="kiem-tra" className="relative">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sun-soft blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-2">
        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-soft px-4 py-1.5 text-sm font-semibold text-coral">
            <Mic className="h-4 w-4" /> Học liệu số sửa lỗi phát âm tiếng Việt
          </span>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] md:text-6xl xl:text-7xl">
            Nói tròn vành rõ chữ,<br />tự tin <span className="relative text-primary">mỗi ngày
              <svg className="absolute -bottom-2 left-0 w-full text-sun" viewBox="0 0 200 12" fill="none"><path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Phát hiện lỗi phụ âm đầu, vần và thanh điệu chỉ trong <b className="text-foreground">5 phút</b>. Nhận lộ trình luyện tập riêng cho từng bé với video khẩu hình, bài luyện và trò chơi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-4 font-semibold text-coral-foreground shadow-soft transition hover:-translate-y-0.5">
              Làm bài kiểm tra miễn phí <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#lo-trinh" className="rounded-full border-2 border-primary px-7 py-3.5 font-semibold text-primary transition hover:bg-primary-soft">Xem lộ trình mẫu</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
            {["Phụ âm đầu l/n, s/x, tr/ch", "Vần, âm cuối", "Thanh hỏi, ngã"].map((t) => (
              <li key={t} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="absolute inset-6 rounded-full bg-primary-soft" />
          <div className="absolute inset-16 rounded-full border-2 border-dashed border-primary/30" />
          <img src={heroChild} alt="Bé đang luyện phát âm" width={1024} height={1024} className="relative z-10 h-full w-full object-contain p-6" />
          <div className="float-slow absolute left-0 top-12 z-20 rounded-2xl bg-card p-4 shadow-card">
            <p className="text-xs text-muted-foreground">Bé đọc</p>
            <p className="font-display text-2xl font-bold">“lúa nếp”</p>
            <p className="flex items-center gap-1 text-xs font-semibold text-primary"><Check className="h-3.5 w-3.5" />Đúng âm L, N</p>
          </div>
          <div className="float-fast absolute right-0 top-4 z-20 rounded-2xl bg-card p-4 shadow-card">
            <p className="text-xs text-muted-foreground">Hôm nay</p>
            <p className="flex items-center gap-1 font-display text-2xl font-bold text-coral"><Star className="h-5 w-5 fill-current" />12 sao</p>
          </div>
          <div className="float-slow absolute bottom-10 right-0 z-20 rounded-2xl bg-card p-4 shadow-card">
            <p className="text-xs text-muted-foreground">Tiến bộ âm L/N</p>
            <div className="mt-2 flex h-12 items-end gap-1.5">
              {[30, 50, 70, 100].map((h, i) => (
                <div key={i} className="w-4 rounded-md bg-primary" style={{ height: `${h}%`, opacity: 0.35 + i * 0.22 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const s = [["10.000+", "bé đã luyện tập"], ["300+", "bài học khẩu hình"], ["50+", "trò chơi phát âm"], ["96%", "phụ huynh hài lòng"]];
  return (
    <section className="mx-auto max-w-7xl px-5">
      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-primary px-6 py-10 text-primary-foreground shadow-soft md:grid-cols-4">
        {s.map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="font-display text-4xl font-extrabold">{n}</p>
            <p className="mt-1 text-sm opacity-85">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-sm font-bold uppercase tracking-widest text-coral">{tag}</span>
      <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
    </div>
  );
}

function Errors() {
  const items = [
    { t: "Phụ âm đầu", d: "Nhầm lẫn l/n, s/x, tr/ch, r/d/gi – lỗi phổ biến nhất ở trẻ.", ex: ["lúa ≠ núa", "sao ≠ xao", "trâu ≠ châu"], c: "bg-primary-soft text-primary" },
    { t: "Vần & âm cuối", d: "Phát âm sai vần, lẫn âm cuối n/ng, t/c khiến lời nói thiếu rõ.", ex: ["bàn ≠ bàng", "mắt ≠ mắc", "ươn ≠ ương"], c: "bg-coral-soft text-coral" },
    { t: "Thanh điệu", d: "Lẫn thanh hỏi – ngã, nặng – sắc làm thay đổi nghĩa của từ.", ex: ["bảo ≠ bão", "nghĩ ≠ nghỉ", "mạ ≠ má"], c: "bg-sun-soft text-foreground" },
  ];
  return (
    <section id="loi" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle tag="Bé thường gặp" title="3 nhóm lỗi phát âm chính" desc="Hệ thống nhận diện chính xác nhóm lỗi để bé luyện đúng chỗ cần luyện." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.t} className="group rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1">
            <h3 className="text-2xl font-bold">{i.t}</h3>
            <p className="mt-3 text-muted-foreground">{i.d}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {i.ex.map((e) => <span key={e} className={`rounded-full px-3 py-1 text-sm font-semibold ${i.c}`}>{e}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Steps() {
  const s = [
    { i: Mic, t: "Kiểm tra 5 phút", d: "Bé đọc theo các từ gợi ý, hệ thống ghi âm và phân tích lỗi." },
    { i: RouteIcon, t: "Nhận lộ trình riêng", d: "Lộ trình được thiết kế theo đúng lỗi và độ tuổi của bé." },
    { i: Gamepad2, t: "Luyện mỗi ngày", d: "Video khẩu hình, bài luyện ngắn và trò chơi giúp bé tiến bộ." },
  ];
  return (
    <section id="lo-trinh" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle tag="Cách hoạt động" title="Ba bước đơn giản" desc="Chỉ 10–15 phút mỗi ngày, bé nói rõ ràng và tự tin hơn." />
        <div className="relative mt-14 grid gap-10 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-primary/30 md:block" />
          {s.map((x, n) => (
            <div key={x.t} className="relative text-center">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-card text-primary shadow-card">
                <x.i className="h-8 w-8" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-coral text-sm font-bold text-coral-foreground">{n + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{x.t}</h3>
              <p className="mx-auto mt-2 max-w-xs text-muted-foreground">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="tinh-nang" className="mx-auto max-w-7xl px-5 py-24">
      <SectionTitle tag="Tính năng" title="Mọi thứ bé cần để nói hay" desc="Thiết kế cùng giáo viên và chuyên gia ngôn ngữ trị liệu." />
      <div className="mt-14 grid gap-6 md:grid-cols-3 md:grid-rows-2">
        <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-soft md:col-span-2 md:row-span-1">
          <Video className="h-10 w-10" />
          <h3 className="mt-5 text-3xl font-bold">Video khẩu hình chuẩn</h3>
          <p className="mt-3 max-w-lg opacity-90">Bé quan sát vị trí môi, lưỡi, răng khi phát âm từng âm – dễ bắt chước, dễ ghi nhớ.</p>
        </div>
        <div className="rounded-3xl bg-sun-soft p-8 shadow-card">
          <Gamepad2 className="h-10 w-10 text-coral" />
          <h3 className="mt-5 text-2xl font-bold">Trò chơi vui nhộn</h3>
          <p className="mt-2 text-muted-foreground">Sưu tầm sao, mở khóa nhân vật mỗi khi bé đọc đúng.</p>
        </div>
        <div id="phu-huynh" className="rounded-3xl bg-coral-soft p-8 shadow-card">
          <BarChart3 className="h-10 w-10 text-coral" />
          <h3 className="mt-5 text-2xl font-bold">Báo cáo cho phụ huynh</h3>
          <p className="mt-2 text-muted-foreground">Theo dõi tiến bộ từng âm qua biểu đồ trực quan hằng tuần.</p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:col-span-2">
          <School className="h-10 w-10 text-primary" />
          <h3 className="mt-5 text-2xl font-bold">Công cụ cho nhà trường</h3>
          <p className="mt-2 max-w-lg text-muted-foreground">Giáo viên quản lý lớp, giao bài và xem lỗi phát âm của cả lớp trên một màn hình.</p>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    ["Chị Thu Hà", "Mẹ bé An, 5 tuổi", "Sau 3 tuần, bé nhà mình đã phân biệt được l và n. Bé rất thích phần trò chơi!"],
    ["Anh Minh Quân", "Bố bé Na, 6 tuổi", "Báo cáo rõ ràng, mình biết con yếu ở đâu để kèm thêm buổi tối."],
    ["Cô Lan Anh", "Giáo viên mầm non", "Công cụ giúp tôi phát hiện sớm các bé cần hỗ trợ về phát âm trong lớp."],
  ];
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionTitle tag="Cảm nhận" title="Phụ huynh nói gì?" desc="Hàng nghìn gia đình đã đồng hành cùng Mầm Thanh." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.map(([n, r, q]) => (
            <figure key={n} className="rounded-3xl bg-card p-8 shadow-card">
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="mt-4 text-lg leading-relaxed">“{q}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-soft font-bold text-primary">{n.split(" ").pop()?.[0]}</span>
                <span><b className="block">{n}</b><span className="text-sm text-muted-foreground">{r}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-coral px-8 py-16 text-center text-coral-foreground shadow-soft">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sun opacity-40 blur-2xl" />
        <h2 className="relative text-4xl font-extrabold md:text-5xl">Bắt đầu hành trình nói hay cho bé</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">Bài kiểm tra miễn phí, kết quả ngay sau 5 phút.</p>
        <a href="#" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-card px-8 py-4 font-semibold text-coral transition hover:-translate-y-0.5">
          Kiểm tra ngay <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p>© 2026 Nảy Lời Mầm Thanh. Học liệu số sửa lỗi phát âm tiếng Việt.</p>
      </div>
    </footer>
  );
}
