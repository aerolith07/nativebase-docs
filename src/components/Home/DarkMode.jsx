import React from 'react';
import { CodeComponent } from './CodeComponent';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Light: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.301"
      height="16.301"
      viewBox="0 0 16.301 16.301"
    >
      <path
        id="Icon_ionic-md-sunny"
        data-name="Icon ionic-md-sunny"
        d="M11.176,2.25H9.622V4.579h1.554V2.25Zm4.7,1.59-1.4,1.4,1.088,1.088,1.4-1.4L15.873,3.84Zm-10.945,0L3.84,4.928l1.4,1.4L6.325,5.237l-1.4-1.4Zm5.473,1.9A4.658,4.658,0,1,0,15.058,10.4,4.671,4.671,0,0,0,10.4,5.743Zm8.151,3.882H16.223v1.554h2.329V9.626Zm-13.973,0H2.25v1.554H4.579V9.626Zm10.985,4.85-1.088,1.088,1.4,1.4,1.088-1.088-1.4-1.4Zm-10.327,0-1.4,1.4,1.088,1.088,1.4-1.4L5.237,14.476Zm5.938,1.747H9.622v2.329h1.554V16.223Z"
        transform="translate(-2.25 -2.25)"
      />
    </svg>
  ),
  Dark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.301"
      height="16.301"
      viewBox="0 0 16.301 16.301"
    >
      <path
        id="Icon_ionic-md-moon"
        data-name="Icon ionic-md-moon"
        d="M9.31,6.524A7.567,7.567,0,0,1,9.9,3.579a8.267,8.267,0,1,0,9.985,9.985A7.63,7.63,0,0,1,9.31,6.524Z"
        transform="translate(-3.586 -3.579)"
      />
    </svg>
  ),
};
const exampleCode = `
<Box
  flexDirection={{ base: 'column', md: 'row' }}
  shadow={4}
  rounded="xl"
  overflow="hidden"
>
  <Box width={{ md: 24 }} height={{ base: 32, md: '100%' }}>
    <Image
      source={{
        uri:
          'https://static.nike.com/a/images/f_auto/dpr_2.0/w_1328,c_limit/b56d1e9b-3861-4c89-995d-b8fb6240a762/nike-just-do-it.jpg'
      }}
      alt="Shoes"
    />
  </Box>
  <Stack p={3} space={2} minW={32}>
    <Text fontSize="xs" color="red.400" fontWeight="semibold">
      Just In
    </Text>
</Box>
`.trim();

export function DarkMode() {
  // const { isDarkTheme } = useThemeContext();
  // TODO: change this
  const foldBg = '';
  // const foldBg = !isDarkTheme ? 'bg-gray-100' : '';
  const { isDarkTheme } = useThemeContext();
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="px-4 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="max-w-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <g
                id="Group_600"
                data-name="Group 600"
                transform="translate(-66 -56)"
              >
                <g
                  id="Group_577"
                  data-name="Group 577"
                  transform="translate(-3 1)"
                >
                  <rect
                    id="Rectangle_166"
                    data-name="Rectangle 166"
                    width="43"
                    height="43"
                    rx="8"
                    transform="translate(69 55)"
                    fill="#d97706"
                  />
                </g>
                <g id="Group_583" data-name="Group 583">
                  <path
                    id="Icon_ionic-md-moon"
                    data-name="Icon ionic-md-moon"
                    d="M10.432,7.1a9.05,9.05,0,0,1,.708-3.523A9.888,9.888,0,1,0,23.083,15.522,9.126,9.126,0,0,1,10.432,7.1Z"
                    transform="translate(70.09 69.018)"
                    fill="#fff"
                  />
                  <path
                    id="Icon_ionic-md-sunny"
                    data-name="Icon ionic-md-sunny"
                    d="M11.176,2.25H9.622V4.579h1.554V2.25Zm4.7,1.59-1.4,1.4,1.088,1.088,1.4-1.4L15.873,3.84Zm-10.945,0L3.84,4.928l1.4,1.4L6.325,5.237l-1.4-1.4Zm5.473,1.9A4.658,4.658,0,1,0,15.058,10.4,4.671,4.671,0,0,0,10.4,5.743Zm8.151,3.882H16.223v1.554h2.329V9.626Zm-13.973,0H2.25v1.554H4.579V9.626Zm10.985,4.85-1.088,1.088,1.4,1.4,1.088-1.088-1.4-1.4Zm-10.327,0-1.4,1.4,1.088,1.088,1.4-1.4L5.237,14.476Zm5.938,1.747H9.622v2.329h1.554V16.223Z"
                    transform="translate(82.772 60.656)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>

            <h1 className={`h2 mb-4 mt-2 text-4xl ${headingColor}`}>
              <span className="">Now With </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Dark Mode
              </span>
            </h1>
            <p className={`text-xl ${subHeadingColor}`}>
              Themeability is one of the core elements of NativeBase. Customise
              your app theme and component styles to your heart's content.
            </p>

            <a
              className="span text-yellow-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://react-native-aria.geekyants.com/"
            >
              Learn More
            </a>
          </div>
          <div
            className="flex mt-10 flex-col lg:flex-row space-y-10 lg:space-y-0 rounded-md"
            // style={{ border: '1px solid black' }}
          >
            <div className="sm:w-full rounded-lg lg:w-1/2 flex flex-col py-0 lg:py-20">
              {/* <div className="flex w-full lg:w-3/4 mx-auto flex-row"></div> */}
              <div className="h-72 lg:h-full flex justify-center relative w-full mt-5">
                <div className="h-full w-full flex items-end justify-center rounded-lg lg:shadow-lg bg-white px-1 md:px-4 py-4 lg:absolute lg:-right-5 md:top-0">
                  <footer className="flex justify-center space-x-5">
                    <div>{SVGs['Light']}</div>
                    <div>Toggle</div>
                    <div>{SVGs['Dark']}</div>
                  </footer>
                </div>
              </div>
            </div>

            <div
              className="flex-1 rounded-lg overflow-hidden px-0 md:px-0"
              // style={{ zIndex: 1, maxHeight: '39rem' }}
            >
              <CodeComponent classStyle={'px-10 py-10'} code={exampleCode} />
            </div>
          </div>
          {/* Circle part*/}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
            aria-hidden="true"
            style={{ zIndex: 0 }}
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
              id="hithere"
            >
              <defs>
                <linearGradient
                  x1="1"
                  y1=".5"
                  x2="0"
                  y2="1"
                  id="illustration-02"
                >
                  <stop stopColor="#34d399" offset="0%" />
                  <stop stopColor="#818cf8" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-02)" fillRule="evenodd">
                <circle cx="300" cy="260" r="200" opacity="0.3" />
                {/* <circle cx="155" cy="443" r="64" opacity="0.3" /> */}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
