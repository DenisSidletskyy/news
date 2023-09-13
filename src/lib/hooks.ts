import {useEffect, useRef, useState} from "react";
import {createTypedHooks} from "easy-peasy";
import {StoreModel} from "@/lib/types";

export const {useStoreState, useStoreActions} = createTypedHooks<StoreModel>();

export function useDebouncedValue<Value extends unknown = string>(value: Value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState<Value>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export function useEffectNoFirstMount(callback: () => void, dependencies?: any[]) {
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (!isFirstMount.current) {
      callback();
    } else {
      isFirstMount.current = false;
    }
  }, dependencies);
}
