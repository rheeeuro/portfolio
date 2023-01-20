import tw from "tailwind-styled-components";

const NavbarContainer = tw.nav`
bg-white
border-gray-200
px-2
sm:px-4
py-2.5
rounded
dark:bg-gray-900
`;

const NavbarDiv = tw.div`
container
flex
flex-row
flex-wrap
items-center
justify-between
mx-auto
`;

const Logo = tw.a`
flex
items-center
`;

const ButtonContainer = tw.div`
flex
md:order-2
`;

const MenuContainer = tw.div`
items-center
justify-between
hidden w-full
md:flex
md:w-auto
md:order-1
`;

const MenuUl = tw.ul`
flex
flex-col
p-4
mt-4
border
border-gray-100
rounded-lg
bg-gray-50
md:flex-row
md:space-x-8
md:mt-0
md:text-sm
md:font-medium
md:border-0
md:bg-white
dark:bg-gray-800
md:dark:bg-gray-900
dark:border-gray-700
`;

const NavListAnchorSelected = tw.a`
block
py-2
pl-3
pr-4
text-white
bg-blue-700
rounded
md:bg-transparent
md:text-blue-700
md:p-0
dark:text-white
`;

const NavListAnchor = tw.a`
block
py-2
pl-3
pr-4
text-gray-700
rounded
hover:bg-gray-100
md:hover:bg-transparent
md:border-0
md:hover:text-blue-700
md:p-0
dark:text-gray-400
md:dark:hover:text-white
dark:hover:bg-gray-700
dark:hover:text-white
md:dark:hover:bg-transparent
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarDiv>
        <Logo>
          <img
            src="https://www.svgrepo.com/show/253758/coin-euro.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Euro Rhee Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Euro Rhee
          </span>
        </Logo>
        <ButtonContainer>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-meduim rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring--800"
          >
            🌙
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </ButtonContainer>
        <MenuContainer id="navbar-cta">
          <MenuUl>
            <li>
              <NavListAnchorSelected href="#" aria-current="page">
                Home
              </NavListAnchorSelected>
            </li>
            <li>
              <NavListAnchor href="#">About</NavListAnchor>
            </li>
            <li>
              <NavListAnchor href="#">Works</NavListAnchor>
            </li>
            <li>
              <NavListAnchor href="#">View Source</NavListAnchor>
            </li>
          </MenuUl>
        </MenuContainer>
      </NavbarDiv>
    </NavbarContainer>
  );
}
