// Extracting a Components Prop Types

import Greet from "../Greet";

const CustomComponent = ({
  isLoggedIn,
  name,
}: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {isLoggedIn} {name}
    </div>
  );
};

export default CustomComponent;
