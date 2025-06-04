import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  max-width: 500px;
  border: 1px solid #dedede;
  border-radius: 7px;
  position: relative;
  padding: 7px;
  display: flex;
  gap: 10px;
  background-color: #f9fafb;
`;

export const SearchIconWrapper = styled.div`
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: 0px;
  outline: none;
  background-color: #f9fafb;

  &:focus {
    border: 0;
    outline: none;
    box-shadow: none;
  }
`;

export const SearchButtonWrapper = styled.button`
  background-color: #1d40af;
  padding: 7px 11px 7px 11px;
  color: white;
  border: 0px;
  border-radius: 7px;
  cursor: pointer;

  &:disabled {
    background-color: #dedede;
    color: black;
    cursor: not-allowed;
  }
`;
