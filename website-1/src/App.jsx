import "./App.css";

function App() {
  return (
    <div className="bg-white h-screen flex flex-col items-center justify-center text-black lg:w-[75%] w-[90%] mx-auto">
      <div className="lg:w-[80%] min-w-fit mx-auto">
        <h1 className="lg:text-5xl md:text-[32px] text-2xl font-bold text-center mb-20">
          Frequently asked questions
        </h1>
        <details className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
          <summary className="collapse-title font-semibold lg:text-[28px] md:text-[20px] text-[16px]">
            Do plumbers deal with heating?
          </summary>
          <div className="collapse-content lg:text-[18px] md:text-[14px] text-[14px]">
            Some of our local plumbers are also gas registered and experienced
            working on heating systems, bathrooms and kitchens.
          </div>
        </details>

        <details className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
          <summary className="collapse-title font-semibold lg:text-[28px] md:text-[20px] text-[16px]">
            Do you charge a call out fee?
          </summary>
          <div className="collapse-content lg:text-[18px] md:text-[14px] text-[14px]">
            Some of our local plumbers are also gas registered and experienced
            working on heating systems, bathrooms and kitchens.
          </div>
        </details>

        <details className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
          <summary className="collapse-title font-semibold lg:text-[28px] md:text-[20px] text-[16px]">
            How quickly can your company send out an engineer?
          </summary>
          <div className="collapse-content lg:text-[18px] md:text-[14px] text-[14px]">
            Some of our local plumbers are also gas registered and experienced
            working on heating systems, bathrooms and kitchens.
          </div>
        </details>

        <details className="collapse collapse-arrow bg-white rounded-none border-b-2 border-slate-300">
          <summary className="collapse-title font-semibold lg:text-[28px] md:text-[20px] text-[16px]">
            What should I do if I get a water leak?
          </summary>
          <div className="collapse-content lg:text-[18px] md:text-[14px] text-[14px]">
            Some of our local plumbers are also gas registered and experienced
            working on heating systems, bathrooms and kitchens.
          </div>
        </details>
      </div>
    </div>
  );
}

export default App;
