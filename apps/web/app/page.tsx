'use client';

import MarkSlides from '../components/MarkSlides'

function Page(): JSX.Element {
    const md =
        `# Slide 1

---

# Slide 2

---

# Slide 3

`
    return <MarkSlides md={md} />;
}

export default Page;
