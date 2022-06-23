import { render } from "@testing-library/react";
import ModalLogin from "./ModalLogin";

describe("Modal is active when the user is not logged yet", () => {
    const modalActive = true;

    const { queryByTestId } = render(<ModalLogin modalActive={modalActive} />);
});
