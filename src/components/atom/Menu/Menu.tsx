import React, {
  useState,
  useRef,
  useEffect,
  ReactElement,
  RefObject,
  SetStateAction,
  Dispatch,
  MouseEvent,
} from 'react';

const MenuIcon = require('../../../images/icons/dots.svg') as string;
const EditIcon = require('../../../images/icons/pencil-alt.svg') as string;
const DeleteIcon = require('../../../images/icons/trash.svg') as string;

import styled from 'styled-components';
import { IMenuProps, IOptionsContainerStyled } from './MenuTypes';

const SettingDropdownContainer = styled.div`
  align-self: center;
  cursor: pointer;
`;

const OptionsContainer = styled.div<IOptionsContainerStyled>`
  position: absolute;
  left: ${(props) => props.xPosition - 180}px;

  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
  padding: 4px 8px;
  z-index: 1;

  div {
    cursor: pointer;
    display: flex;
    padding: 6px 0px;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    img {
      padding-left: 10px;
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;
const Menu = ({
  setEditModalVisibility,
  setDeleteModalVisibility,
  setSelectedItem,
  item,
}: IMenuProps): ReactElement => {
  const [isMenuDropdownVisible, setMenuDropdownVisible]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(true);

  const [xPosition, setXPosition]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState<number>(0);

  const menuRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const handleMouseOut = (e: any): void => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as HTMLSelectElement)
    ) {
      setMenuDropdownVisible(false);
    }
  };

  const handleResize = (): void => {
    setMenuDropdownVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleMouseOut, true);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('click', handleMouseOut, true);
    };
  });

  const handleOpen = (e: MouseEvent<HTMLInputElement>): void => {
    setXPosition(e.clientX);
    setSelectedItem(item);
    setMenuDropdownVisible(!isMenuDropdownVisible);
  };

  const handleEditModalVisibility = (): void => {
    setEditModalVisibility(true);
    setMenuDropdownVisible(false);
  };

  const handleDeleteModalVisibility = (): void => {
    setDeleteModalVisibility(true);
    setMenuDropdownVisible(false);
  };

  const options = (): ReactElement => {
    return (
      <OptionsContainer xPosition={xPosition}>
        <div onClick={handleEditModalVisibility}>
          Edit Category <img src={EditIcon} alt='edit' height='24px' />
        </div>
        <div onClick={handleDeleteModalVisibility}>
          Delete Category
          <img src={DeleteIcon} alt='delete' height='24px' />
        </div>
      </OptionsContainer>
    );
  };

  return (
    <SettingDropdownContainer ref={menuRef}>
      <div className='button' onClick={handleOpen}>
        <img src={MenuIcon} alt='menu' height='24px' />
      </div>
      {isMenuDropdownVisible && options()}
    </SettingDropdownContainer>
  );
};

export default Menu;
