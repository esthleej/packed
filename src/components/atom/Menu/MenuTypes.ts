export interface IOptionsContainerStyled {
  xPosition: number;
}

export interface IMenuProps {
  setSelectedItem: (item: { name: string; index: number }) => void;
  item: {
    name: string;
    index: number;
  };
  setEditModalVisibility: (isVisible: boolean) => void;
  setDeleteModalVisibility: (isVisible: boolean) => void;
}
