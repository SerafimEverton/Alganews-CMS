import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.table`
  color: #274060;
  background-color: ${transparentize(0.95, "#274060")};
  width: 100%;
`;

export const Heading = styled.thead`
  background-color: ${transparentize(0.85, "#274060")};
  display: flex;
  justify-content: space-between;
  
`;

export const HeadingRow = styled.tr``;

export const HeadingCell = styled.th`
  height: 32px;
  font-size: 14px;
  padding: 0 8px;
`;

export const Bodyy = styled.body``;

export const BodyRow = styled.tr``;

export const BodyCell = styled.td`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  padding: 0 8px;
`;

export const TablePagination = styled.div`

display: flex;
gap: 8px;

`