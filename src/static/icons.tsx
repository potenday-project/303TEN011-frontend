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

export const IconCancel = ({ color = "#111111", onClick }: Argument) => {
  return (
    <svg
      onClick={onClick}
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
