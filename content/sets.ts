export type DJSet = {
  title: string;
  subtitle?: string;
  platform: "soundcloud" | "mixcloud" | "youtube";
  url: string;
};

export const sets: DJSet[] = [
  {
    title: "AHKO 01 — Demo DJ Set",
    subtitle: "house, disco and all",
    platform: "soundcloud",
    url: "https://soundcloud.com/ahko26/ahko-01-demo-dj-set-house-disco-and-all",
  },
];
