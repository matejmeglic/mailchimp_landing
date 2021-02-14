import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email, name, lastName;

  const submit = () =>
    email &&
    name &&
    lastName &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: name.value,
      LNAME: lastName.value,
    });

  return (
    <div>
      {status === "sending" && (
        <div className="w-48 sm:w-96 mt-2 ml-2 text-justify text-blue-400">
          Prosimo, počakajte trenutek ...
        </div>
      )}
      {status === "error" && (
        <div
          className="w-48 sm:w-96 mt-2 ml-2 text-justify text-red-500"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="bg-black bg-opacity-40 md:bg-opacity-0 w-48 sm:w-96 mt-2 ml-2 text-justify text-green-400"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br />
      <input
        className="pt-4 pb-4 pl-3 pr-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white m-1"
        ref={(node) => (name = node)}
        type="text"
        placeholder="Ime"
      />{" "}
      <input
        className="pt-4 pb-4 pl-3 pr-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white m-1"
        ref={(node) => (lastName = node)}
        type="text"
        placeholder="Priimek"
      />{" "}
      <br />
      <input
        className="pt-4 pb-4 pl-3 pr-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white m-1"
        ref={(node) => (email = node)}
        type="email"
        placeholder="vaš@email.com"
      />{" "}
      <button
        className="px-8 bg-yellow-400 text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r m-1 pl-12 pr-12 object-center"
        onClick={submit}
      >
        Naročite se
      </button>
    </div>
  );
};

class App extends Component {
  render() {
    const url =
      "https://mc.us1.list-manage.com/signup-form/subscribe?u=a1a2a72f7947c0ba298da3344&id=0089ace1f0";

    return (
      <div className="flex justify-center h-screen bg-black bg-back bg-cover bg-no-repeat bg-center md:bg-top  ...">
        <div className="mt-4 md:mt-24 ml-16 md:-ml-16">
          <p>Photo by Nitin Arya from Pexels</p>
          <h1 className="ml-2 font-sans font-semibold text-md md:text-2xl text-white ...">
            Knjiga o gradnji hiše 2021
          </h1>
          <p className="w-48 sm:w-96 mt-2 ml-2 font-sans font-light text-sm md:text-md text-white text-justify ...">
            Dobrodošli!
            <br />V kolikor želite prejemati ažurne informacije o nastanku
            knjige, ki piše o vseh mogočih pasteh pri gradnji hiše v letu 2021,
            se prijavite na email listo, preko katere vas bo avtor občasno
            obveščal o poteku pisanja knjige.
          </p>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
          <p className="mt-1 font-sans font-light text-sm md:text-md text-white text-center ...">
            <a href="https://matejmeglic.com">Matej Meglič</a>{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
