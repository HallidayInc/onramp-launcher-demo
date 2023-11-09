import { styled } from "@mui/system";
import WhiteHallidayLogo from "../public/whiteHallidayLogo.svg";
import { MouseEventHandler } from "react";

export const Page = styled("div")({
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#2a2529",
    height: "100vh",
    "@media (max-width: 500px)": {
        height: "auto",
    },
});
export const Container = styled("div")({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "800px",
    gap: "38px",
    padding: "36px",
    position: "relative",
    zIndex: 1,
});
export const Card = styled("div")({
    padding: "23px",
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
});
export const TitleContainer = styled("div")({
    fontSize: "29px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    marginTop: "30px",
    color: "white",
});
export const LogoContainer = styled("div")({
    width: "240px",
    height: "240px",
    backgroundColor: "#7747FF",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
export const MockExplanationText = styled("div")({
    color: "rgba(255,255,255,0.9)",
    lineHeight: "150%",
    fontWeight: 300,
});

export function HallidayButton({
    children,
    onClick,
}: {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
}) {
    return (
        <div
            style={{
                borderRadius: "5px",
                flex: "1 0 0",
                userSelect: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "#7747FF",
                gap: "8px",
                padding: "16px 40px",
                color: "white",
            }}
            onClick={onClick}
        >
            <img src={WhiteHallidayLogo} width={25} height={20} alt="Halliday logo" />
            {children}
        </div>
    );
}
