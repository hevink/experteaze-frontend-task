import { useEffect, useState } from 'react'

export const useResponsive = (size, queryType) => {
  const [matches, setMatches] = useState(false)

  const breakpoints = {
    xs: 320,
    sm: 640,
    md: 900,
    lg: 1024,
    xl: 1280,
  }

  useEffect(() => {
    let mediaQueryList
    const breakpoint = breakpoints[size]

    switch (queryType) {
      case 'up':
        mediaQueryList = window.matchMedia(`(min-width: ${breakpoint}px)`)
        break
      case 'down':
        mediaQueryList = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
        break
      case 'between':
        const nextBreakpointKey = Object.keys(breakpoints).find(
          (key) => breakpoints[key] > breakpoint,
        )
        const nextBreakpoint = breakpoints[nextBreakpointKey]
        mediaQueryList = window.matchMedia(
          `(min-width: ${breakpoint}px) and (max-width: ${nextBreakpoint - 1}px)`,
        )
        break
      case 'only':
        mediaQueryList = window.matchMedia(
          `(min-width: ${breakpoint}px) and (max-width: ${breakpoint}px)`,
        )
        break
      default:
        return
    }

    const handleChange = (event) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)
    setMatches(mediaQueryList.matches)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [size, queryType])

  return matches
}

export default useResponsive
