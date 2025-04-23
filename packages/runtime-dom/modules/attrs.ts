export function patchAttr(
  el: Event,
  key: string,
  value: any
) {
  if (value === null) {
    el.removeAttribute(key)
  } else {
    el.setAttribute(key, value)
  }
}
