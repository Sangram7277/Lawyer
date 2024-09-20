export default function Maincontent() {
  return (
    <>
      <div className="w-screen">
        <div>
          <img
            src="./Images/Im1.svg"
            alt=""
            className="w-full h-auto"
            style={{ maxWidth: '1920px', maxHeight: '487px' }}
          />
        </div>

        <div className="max-w-screen-lg mx-auto relative mt-10 px-4">
          <div className="text-center">
            <h1 className="font-sans font-bold text-2xl">Meet Our Great Team</h1>
            <p className="mt-4 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Enim ad minim veniam, quis nostrud exercitation
            </p>
            <button className="bg-black text-white h-10 w-40 rounded-full mt-6">Join our Team</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <img
                src="./Images/Sarah.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">Sarah Jasmine</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <button className="w-40 h-8 bg-yellow-400 text-black rounded-2xl mt-4">CEO at Company</button>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>

            <div className="text-center">
              <img
                src="./Images/John.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">John Carter</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>

            <div className="text-center">
              <img
                src="./Images/Daisy.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">Daisy Stella</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>

            <div className="text-center">
              <img
                src="./Images/Maya.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">Maya Elizabeth</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>

            <div className="text-center">
              <img
                src="./Images/Ryan.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">Ryan Jackson</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>

            <div className="text-center">
              <img
                src="./Images/Lily.svg"
                alt=""
                className="mx-auto"
                style={{ width: '366px', height: '392px' }}
              />
              <h1 className="font-bold text-2xl mt-6">Lilly Victoria</h1>
              <p className="text-gray-500 mt-2">
                Leverage agile frameworks to provide a robust
                synopsis for higher level overviews.
              </p>
              <img
                src="./Images/Icons.svg"
                alt=""
                className="w-32 h-auto mt-4 mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="h-auto w-full bg-black text-white mt-20 px-4 py-10">
          <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:items-start">
            <div className="mb-8 md:mb-0 md:mr-8">
              <button className="bg-gray-800 text-white w-24 rounded-2xl">CONTACT</button>
              <h1 className="text-2xl font-semibold mt-4">Ready To Talk?</h1>
              <p className="mt-2">Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.</p>
              <p>Massa placerat duis ultrices lacus sed turpi. Pellentesque</p>
              <p>Pellentesque habitant morbi tristique</p>
              <div className="mt-6">
                <input
                  type="text"
                  className="bg-white h-16 w-64 rounded-full px-4"
                  placeholder="your mail address"
                />
                <button className="h-16 w-36 text-white bg-green-500 rounded-full ml-4 mt-2">Send Message</button>
              </div>
            </div>
            <img
              src="./Images/Photo.svg"
              alt=""
              className="w-full md:w-1/2 h-auto rounded-3xl mt-10 md:mt-0"
              style={{ maxWidth: '547.97px', maxHeight: '915.99px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
