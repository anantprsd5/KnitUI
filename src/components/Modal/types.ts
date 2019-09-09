import { ReactNode } from "react"
import { BaseComponentProps } from "../../common/types"
import { fontSizeType } from "../../common/types"

export interface ModalWrapperProps extends BaseComponentProps {
  /** Contents to be rendered in the header section */
  header: { title: string; fontSize?: fontSizeType, rightSection?: ReactNode, noFill?: boolean }
  /** Contents to be rendered on in the body section */
  body: ReactNode
  /** Contents to be rendered on in the footer section */
  footer: ReactNode
  /** The padding values to be applied */
  padding?: { vertical: string; horizontal: string }
  /** Size values representing the amount of physical space occupied */
  size?: "small" | "medium" | "large" | "x-large"
  /** The DOM node under which the modal should reside */
  getContainer?: () => HTMLElement
  /** Controls the visibility of the modal */
  visible?: boolean
  /** Function to be executed when the modal is dismissed */
  onClose: () => void
  /** Addon panel that is attached to the modal */
  panel?: { position: "left" | "right" | "bottom"; content: ReactNode }
  /** to unmount child compenents on onClose */
  destroyOnClose?: boolean
}

export interface IStyledDialog {
  customProps: ModalWrapperProps
  theme: any
  [propName: string]: any
}