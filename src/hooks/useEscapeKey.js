import { useEffect } from "react";

/**
 * Calls the handler when the Escape key is pressed.
 * Only attaches the listener when `active` is true.
 */
function useEscapeKey(handler, active = true) {
  useEffect(() => {
    if (!active) return;

    function onKeyDown(e) {
      if (e.key === "Escape") handler();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handler, active]);
}

export default useEscapeKey;
