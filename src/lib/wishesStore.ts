export interface Wish {
  id: string;
  name: string;
  text: string;
  date: string;
}

const STORAGE_KEY = "baby_wishes";

export function getWishes(): Wish[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addWish(name: string, text: string): Wish[] {
  const wishes = getWishes();
  const newWish: Wish = {
    id: crypto.randomUUID(),
    name,
    text,
    date: new Date().toLocaleDateString("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
  const updated = [newWish, ...wishes];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event("wishes-updated"));
  return updated;
}