interface Argument {
  color?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const IconSearch = ({ className }: Argument) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_74_739)">
        <path
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_74_739">
          <rect width="24" height="24" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const IconCancel = ({ color = "#111111", onClick, className }: Argument) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 1L1 19" stroke={color} strokeWidth="2" />
      <path d="M19 19L1 0.999999" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export const IconArrow = () => {
  return (
    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.02125 13.0425L2 7.02123L8.02125 0.999978"
        stroke="#111111"
        strokeWidth="2.00708"
      />
    </svg>
  );
};

export const IconQuote = () => {
  return (
    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.40076 9.4231C6.14842 9.23777 6.84624 9.26093 7.49421 9.49259C8.19203 9.67792 8.79016 9.97908 9.28861 10.3961C9.83689 10.8131 10.2606 11.3227 10.5596 11.925C10.9085 12.5273 11.083 13.1297 11.083 13.732C11.083 14.9366 10.6095 16.0486 9.66244 17.0679C8.7154 18.0409 7.46929 18.5273 5.92412 18.5273C4.03004 18.5273 2.55963 17.9019 1.51291 16.6509C0.516021 15.3536 0.0175781 13.7551 0.0175781 11.8555C0.0175781 9.26093 0.765242 6.94433 2.26057 4.90572C3.7559 2.86711 5.97396 1.40765 8.91477 0.527344L10.3353 2.33429C8.54094 2.98294 7.12038 3.88642 6.07365 5.04472C5.07677 6.15669 4.57833 7.43082 4.57833 8.86711C4.57833 9.4231 4.85247 9.60843 5.40076 9.4231ZM18.3353 9.4231C19.083 9.23777 19.8057 9.26093 20.5036 9.49259C21.2014 9.67792 21.7995 9.97908 22.298 10.3961C22.8462 10.8131 23.2699 11.3227 23.569 11.925C23.868 12.5273 24.0176 13.1297 24.0176 13.732C24.0176 14.9366 23.5441 16.0486 22.597 17.0679C21.65 18.0409 20.4039 18.5273 18.8587 18.5273C16.9646 18.5273 15.4942 17.9019 14.4475 16.6509C13.4506 15.3536 12.9522 13.7551 12.9522 11.8555C12.9522 9.26093 13.6998 6.94433 15.1951 4.90572C16.6905 2.86711 18.9085 1.40765 21.8494 0.527344L23.2699 2.33429C21.4755 2.98294 20.055 3.88642 19.0082 5.04472C18.0113 6.15669 17.5129 7.43082 17.5129 8.86711C17.5129 9.4231 17.787 9.60843 18.3353 9.4231Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconCheck = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="11" fill="white" />
      <path d="M6 11.5L9.5 15L16.5 7" stroke="#2C2A29" strokeWidth="2" />
    </svg>
  );
};

export const IconHome = () => {
  return (
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 3.3625L18.75 8.9875V18.75H16.25V11.25H8.75V18.75H6.25V8.9875L12.5 3.3625V3.3625ZM12.5 0L0 11.25H3.75V21.25H11.25V13.75H13.75V21.25H21.25V11.25H25L12.5 0Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const IconPlus = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0V20" stroke="currentColor" strokeWidth="3" />
      <path d="M20 10L-5.66244e-07 10" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
};

export const IconArchive = () => {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2H10L8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18.77C19.45 16 20 15.44 20 14.77V4C20 2.9 19.1 2 18 2ZM18 14H2V2H7.17L9.17 4H18V14ZM16 8H4V6H16V8ZM12 12H4V10H12V12Z"
        fill="currentColor"
      />
    </svg>
  );
};
