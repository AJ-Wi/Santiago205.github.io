import { readonly, ref } from "vue";

export function readDataYoutube() {
  const data = "http://localhost:3000/";
  const videos = ref(null);
  const error = ref(null);

  const makeRequest = async () => {
    try {
      const request = await fetch(data);
      videos.value = await request.json();
    } catch (err) {
      error.value = err;
    }
  };

  return {
    makeRequest,
    videos: readonly(videos),
    error: readonly(error),
  };
}
