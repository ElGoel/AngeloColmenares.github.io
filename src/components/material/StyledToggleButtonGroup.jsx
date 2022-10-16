import { styled, ToggleButtonGroup } from "@mui/material";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => `
    & .MuiToggleButtonGroup-grouped {
      margin: ${theme.spacing(1.5)} ${theme.spacing(2)};
      border: 0;
      font-size: ${theme.typography.fontSize}px;
      color: ${theme.palette.primary.contrastText};
      border-radius: ${theme.shape.borderRadius * 2}px !important;
      text-transform: capitalize;
      font-weight: ${theme.typography.fontWeightBold};
      font-family: helvetica;
      padding: .5rem 1rem;
      &.Mui-disabled {
        border: 0;
      }
      &.Mui-selected {
        background-color: ${theme.palette.primary.main};
        pointer-events: none;
      }
      &:not(:last-of-type) {
        border-radius: 0;
      }
      &:last-of-type {
        border-radius: 0;
      }
    },
  `
);