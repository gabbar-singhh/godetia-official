import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />;
    </Theme>
  );
}
