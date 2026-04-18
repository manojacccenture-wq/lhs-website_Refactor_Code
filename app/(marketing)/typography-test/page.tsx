export default function TypographyTest() {
  return (
    <div className="p-6 md:p-12 space-y-10">

      {/* ================= HEADINGS DEFAULT ================= */}
      <section className="space-y-4">
        <h2 className="text-heading-lg">Default Heading Tags (Base Layer)</h2>

        <h1>H1 - Hero Title</h1>
        <h2>H2 - Section Title</h2>
        <h3>H3 - Sub Section</h3>
        <h4>H4 - Small Heading</h4>
        <h5>H5 - Label / Tag</h5>
        <h6>H6 - Micro Heading</h6>
      </section>

      {/* ================= HEADINGS USING UTILITIES ================= */}
      <section className="space-y-4">
        <h2 className="text-heading-lg">Heading Utilities Override</h2>

        <p className="text-body-sm text-gray-500">
          Same tag, different visual size
        </p>

        <h2 className="text-heading-xl">H2 styled as H1 (Hero)</h2>
        <h2 className="text-heading-lg">H2 styled as H2</h2>
        <h2 className="text-heading-md">H2 styled as H3</h2>
        <h2 className="text-heading-sm">H2 styled as H4</h2>
      </section>

      {/* ================= BODY TEXT ================= */}
      <section className="space-y-4">
        <h2 className="text-heading-lg">Body Text</h2>

        <p className="text-body-lg">
          Body Large — Used for hero descriptions or important content.
        </p>

        <p className="text-body-md">
          Body Medium — Default paragraph text across the app.
        </p>

        <p className="text-body-sm">
          Body Small — Used for captions, helper text, metadata.
        </p>
      </section>

      {/* ================= REAL UI EXAMPLE ================= */}
      <section className="space-y-6">
        <h2 className="text-heading-lg">Real UI Example</h2>

        <div className="p-6 border rounded-xl">
          <h5 className="text-heading-sm text-primary">
            FROM CONCEPT TO SCALABLE CODE
          </h5>

          <h1 className="text-heading-xl mt-2">
            Turning Vision Into <br /> Scalable Reality
          </h1>

          <p className="text-body-md mt-4 max-w-xl">
            We build smart, scalable software that transforms ideas into
            streamlined, real-world solutions.
          </p>
        </div>
      </section>

      {/* ================= EDGE CASE TEST ================= */}
      <section className="space-y-4">
        <h2 className="text-heading-lg">Edge Cases</h2>

        <p className="text-body-sm text-gray-500">
          Testing responsiveness + clamp
        </p>

        <h1 className="text-heading-xl">
          Resize screen → should scale smoothly
        </h1>

        <p className="text-body-md">
          This text should scale between mobile and desktop using clamp().
        </p>
      </section>

    </div>
  );
}