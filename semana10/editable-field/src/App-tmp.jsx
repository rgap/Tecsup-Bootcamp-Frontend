export default function App() {
  function changeToInputs(containerId) {
    const saveBtn = document.querySelector(`#button-save-${containerId}`);
    const changeBtn = document.querySelector(`#button-change-${containerId}`);

    document
      .querySelectorAll(`#${containerId} label.input-value`)
      .forEach((label) => {
        const input = document.createElement("input");
        input.setAttribute("value", label.textContent);
        input.className =
          "border border-[--color-form-border] placeholder:text-sm w-full text-center md:text-start";
        input.type = label.getAttribute("data-type");
        if (label.id == "country") input.disabled = true;
        input.id = label.id;
        label.replaceWith(input);
      });

    changeBtn.style.display = "none";
    saveBtn.style.display = "block";
  }

  function changeToLabels(containerId) {
    const saveBtn = document.querySelector(`#button-save-${containerId}`);
    const changeBtn = document.querySelector(`#button-change-${containerId}`);
    const inputs = document.querySelectorAll(`#${containerId} input`);

    inputs.forEach((input) => {
      const label = document.createElement("label");
      label.textContent = input.value;
      label.className = "block input-value";
      label.setAttribute("data-type", input.type);
      label.id = input.id;
      input.replaceWith(label);
    });

    saveBtn.style.display = "none";
    changeBtn.style.display = "block";
  }

  return (
    <main className="flex justify-center">
      <div>
        <h1 className="">My account</h1>
        <form autoComplete="off">
          <div className="flex justify-between place-items-baseline">
            <h2>My Data</h2>
            <button
              id="button-change-personal"
              onClick={(event) => {
                event.preventDefault();
                changeToInputs("personal");
              }}
            >
              Change
            </button>
            <button
              id="button-save-personal"
              className="hidden"
              onClick={(event) => {
                event.preventDefault();
                changeToLabels("personal");
              }}
            >
              Save
            </button>
          </div>

          <hr className="mb-5" />

          <div id="personal" className="grid grid-cols gap-4">
            <label className="font-semibold">Email</label>
            <label className="block input-value" data-type="email">
              my email
            </label>

            <label className="font-semibold">name</label>
            <label className="block input-value" data-type="text">
              my name
            </label>
          </div>
        </form>

        <form autoComplete="off">
          <div className="flex justify-between place-items-baseline">
            <h2 className="text-base mb-4 font-semibold">Payment</h2>
            <button
              id="button-change-payment"
              onClick={(event) => {
                event.preventDefault();
                changeToInputs("payment");
              }}
            >
              Change
            </button>
            <button
              id="button-save-payment"
              className="hidden"
              onClick={(event) => {
                event.preventDefault();
                changeToLabels("payment");
              }}
            >
              Save
            </button>
          </div>

          <hr className="mb-5" />

          <div id="payment" className="grid grid-cols-1 gap-4">
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">Card</label>
              <label className="block input-value" data-type="text">
                Visa ••• 3011
              </label>
            </div>
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">Expiration</label>
              <label className="block input-value" data-type="text">
                12/23
              </label>
            </div>
            <div className="text-center flex flex-col gap-4">
              <label className="font-semibold">CVC</label>
              <label className="block input-value" data-type="text">
                •••
              </label>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
