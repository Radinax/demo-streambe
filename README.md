# Demo for Streambe

Hi! My name is Adrian Beria, I made you guys a rework on your website as a letter of presentation, hope you guys liked it!

## Features

### Map

Built with Leaflet and React Leaflet, this is a library I used for a financial startup project based in US (https://beta.capnote.com/). Its simple to use:

```tsx
<MapContainer
  center={[0, -20]}
  zoom={3}
  zoomSnap={2.5}
  scrollWheelZoom={false}
  doubleClickZoom={false}
  dragging={true} // Allow drag for UX
  style={{ height: "100%", width: "100%" }}
  className="bg-slate-900"
>
  {/* Dark Tile Layer */}
  <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png" />

  {/* Markers */}
  {locations.map((loc, index) => {
    // map the pins
  })}
</MapContainer>
```

The Title Layer can use different types of images as base, its pretty much up to personal taste, I used the one I showed since it looked better.

### Clutch script

Streambe reviewed as 5 stars in Clutch, in order to showed the widget, I made this script:

```tsx
const ClutchWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widget.clutch.co/static/js/widget.js"; // Verify the latest script URL from Clutch
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up the script on unmount
    };
  }, []);

  return (
    <div
      className="clutch-widget w-fit"
      data-nofollow="true"
      data-url="https://widget.clutch.co"
      data-widget-type="2"
      data-height="45"
      data-theme="white"
      data-clutchcompany-id="1569287"
    >
      <iframe
        id="iframe-0.15518551532705793"
        width="100%"
        src="https://widget.clutch.co/widgets/get/2?ref_domain=streambe.com&amp;uid=1569287&amp;theme=white&amp;rel_nofollow=true&amp;ref_path=/"
        height="45px"
        title="Steambe"
      ></iframe>
    </div>
  );
};
```

The React component renders a div with metadata and an iframe, then the useEffect hook loads Clutch’s JS file to possibly enable:

- Dynamic resizing
- Click tracking
- Review updates
- Anti-fraud or domain verification

The iframe loads a pre-rendered, isolated widget from Clutch’s servers, ensuring:

- Consistent appearance
- Security (sandboxed)
- Independence from the host site’s styling

### Intersecton Observer Hook

The purpose of this custom hook is to detect when an element enters the user's viewport as they scroll down the page. It uses the browser's Intersection Observer API to watch the element, and once it becomes visible (even slightly), it triggers a change in state — marking it as "visible" (which triggers the animation we want). This allows to run animations or load content only when the user scrolls to that part of the page, creating a smooth, engaging user experience.

```ts
const useAnimation = (options = { threshold: 0.1 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current; // DOM Ref
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target); // Stop observing once visible
      }
    }, options);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
};
```

## Styling

I always use Tailwind, no major innovation, just some gradients on the Hero and some animations on scroll, defined Streambe primary color in a variable to re-use.

## Resources

Here is the demo site: https://demo-streambe.vercel.app/

Here is the original site: https://streambe.com/

Here is my blog for technical insights: https://adrian-beria-blog.netlify.app/

And here is my website: https://adrian-beria-website.vercel.app/

---

**Built with ❤️ by [Adrian Beria](https://github.com/Radinax)**
