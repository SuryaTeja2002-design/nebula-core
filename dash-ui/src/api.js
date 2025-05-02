export async function fetchLatestAlert() {
    try {
      const res = await fetch("http://localhost:6000/latest-alert");
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      return null;
    }
  }
  