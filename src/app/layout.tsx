import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ActiveThemeProvider } from "@/components/active-theme";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import { fontVariables } from "@/lib/fonts";

const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const metadata: Metadata = {
  title: "RDX – Real-time Data eXperience Dashboard",
  description:
    "RDX is a unified, real-time data dashboard platform delivering live insights from APIs, databases, and sensors. Create customizable dashboards, set smart alerts, and make faster decisions with real-time visual analytics.",
  keywords: [
    "real-time dashboard",
    "data visualization",
    "live data monitoring",
    "business intelligence",
    "custom dashboards",
    "data analytics platform",
    "RDX dashboard",
    "KPI monitoring",
    "real-time insights",
    "interactive charts",
    "data alert system",
    "data streaming platform",
  ],
  openGraph: {
    title: "RDX – Real-time Data eXperience",
    description:
      "Empower decision-making with real-time dashboards and actionable insights. RDX lets you connect, visualize, and react to your data instantly.",
    url: "https://rdxplatform.netlify.app",
    siteName: "RDX Dashboard",
    images: [
      {
        url: "https://rdxplatform.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "RDX – Real-time Data Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RDX – Real-time Data Dashboard",
    description:
      "Visualize, analyze, and act on your data instantly with RDX. Real-time dashboards and smart alerts for modern teams.",
    images: ["https://rdxplatform.netlify.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [
    { name: "Ankit Pakhale", url: "https://ankitpakhale.netlify.app/" },
  ],
  creator: "Ankit Pakhale",
  publisher: "Ankit Pakhale",
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const activeThemeValue = cookieStore.get("active_theme")?.value;
  const isScaled = activeThemeValue?.endsWith("-scaled");
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background overscroll-none font-sans antialiased",
          activeThemeValue ? `theme-${activeThemeValue}` : "",
          isScaled ? "theme-scaled" : "",
          fontVariables
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <ActiveThemeProvider initialTheme={activeThemeValue}>
            {children}
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
