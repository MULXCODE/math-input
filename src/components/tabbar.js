// @flow

import React from "react";

import {StyleSheet} from "aphrodite";
import Clickable from "@khanacademy/wonder-blocks-clickable";
import {View} from "@khanacademy/wonder-blocks-core";
import Color from "@khanacademy/wonder-blocks-color";

type Props = {
    onPress: () => void,
    itemState: ItemState,
    itemType: TabbarItemType,
};

export type ItemState = "active" | "inactive" | "disabled";
type State = {};

const styles = StyleSheet.create({
    base: {
        display: "flex",
        width: 44,
        height: 38,
        boxSizing: "border-box",
        borderRadius: 3,
        border: `1px solid transparent`,
        marginRight: 1,
        marginLeft: 1,
    },
    hovered: {
        background:
            "linear-gradient(0deg, rgba(24, 101, 242, 0.32), rgba(24, 101, 242, 0.32)), #FFFFFF",
        border: "1px solid #1865F2",
    },
    pressed: {
        background: "#1B50B3",
    },
    focused: {
        outline: "none",
        border: "2px solid #1865F2",
    },
    innerBox: {
        boxSizing: "border-box",
        border: `1px solid transparent`,
        dislay: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    innerBoxPressed: {
        border: `1px solid ${Color.white}`,
        borderRadius: 2,
    },
});

export type TabbarItemType = "Geometry" | "Operators" | "Numbers";

function IconAsset({
    tintColor,
    type,
}: {
    tintColor: string,
    type: TabbarItemType,
}) {
    if (type === "Geometry") {
        return (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.57584 7.09442C7.92723 6.92984 8.3421 6.98339 8.64018 7.23179L26.6402 22.2318C26.9636 22.5013 27.0836 22.9446 26.9403 23.3404C26.7969 23.7363 26.421 24 26 24H8C7.44772 24 7 23.5523 7 23V8.00001C7 7.61199 7.22446 7.259 7.57584 7.09442ZM9 10.1351V17H13C13.5523 17 14 17.4477 14 18V22H23.238L9 10.1351ZM12 22V19H9V22H12Z"
                    fill={tintColor}
                />
            </svg>
        );
    } else if (type === "Operators") {
        return (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29 6H30V7H29V6ZM27 6C27 4.89543 27.8954 4 29 4H30C31.1046 4 32 4.89543 32 6V7C32 8.10457 31.1046 9 30 9H29C27.8954 9 27 8.10457 27 7V6ZM11.1318 6.50386C11.3098 6.19229 11.6411 6 12 6H14C14.5523 6 15 6.44772 15 7C15 7.55228 14.5523 8 14 8H12.5803L8.86824 14.4961C8.68527 14.8163 8.34091 15.0098 7.97225 14.9996C7.6036 14.9894 7.2705 14.7771 7.10557 14.4472L5.10557 10.4472C4.85858 9.95324 5.05881 9.35256 5.55279 9.10557C6.04676 8.85858 6.64744 9.05881 6.89443 9.55279L8.0588 11.8815L11.1318 6.50386ZM7.70676 16.2925C8.09748 16.6829 8.09779 17.316 7.70745 17.7068C7.28543 18.1292 6.84383 18.7303 6.51157 19.3658C6.17039 20.0184 6 20.601 6 21C6 21.3789 6.17235 21.9897 6.51638 22.6649C6.85315 23.3259 7.28488 23.9121 7.66786 24.2557C8.07892 24.6246 8.11314 25.2568 7.74429 25.6679C7.37544 26.0789 6.7432 26.1131 6.33214 25.7443C5.7161 25.1915 5.14783 24.3844 4.73434 23.5728C4.32813 22.7755 3.99999 21.8345 4 21C4.00001 20.1391 4.3301 19.2217 4.73917 18.4392C5.15715 17.6397 5.71554 16.8708 6.29255 16.2932C6.68288 15.9025 7.31605 15.9022 7.70676 16.2925ZM11.2932 16.2925C11.684 15.9022 12.3171 15.9025 12.7075 16.2932C13.2845 16.8708 13.8428 17.6397 14.2608 18.4392C14.6699 19.2217 15 20.1391 15 21C15 21.8345 14.6719 22.7755 14.2657 23.5728C13.8522 24.3844 13.2839 25.1915 12.6679 25.7443C12.2568 26.1131 11.6246 26.0789 11.2557 25.6679C10.8869 25.2568 10.9211 24.6246 11.3321 24.2557C11.7151 23.9121 12.1469 23.3259 12.4836 22.6649C12.8276 21.9897 13 21.3789 13 21C13 20.601 12.8296 20.0184 12.4884 19.3658C12.1562 18.7303 11.7146 18.1292 11.2925 17.7068C10.9022 17.316 10.9025 16.6829 11.2932 16.2925ZM27.9363 17.6489C28.1302 18.166 27.8682 18.7424 27.3511 18.9363L21.848 21L27.3511 23.0637C27.8682 23.2576 28.1302 23.834 27.9363 24.3511C27.7424 24.8682 27.166 25.1302 26.6489 24.9363L18.6489 21.9363C18.2586 21.79 18 21.4168 18 21C18 20.5832 18.2586 20.21 18.6489 20.0637L26.6489 17.0637C27.166 16.8698 27.7424 17.1318 27.9363 17.6489ZM21 8V13H24V8H21ZM20 6C19.4477 6 19 6.44772 19 7V14C19 14.5523 19.4477 15 20 15H25C25.5523 15 26 14.5523 26 14V7C26 6.44772 25.5523 6 25 6H20Z"
                    fill={tintColor}
                />
            </svg>
        );
    } else if (type === "Numbers") {
        return (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.4123 19.5794V21.0004H4.71434V19.5794H6.73034V14.0214C6.73034 13.9001 6.73267 13.7764 6.73734 13.6504C6.742 13.5244 6.749 13.3961 6.75834 13.2654L5.42834 14.3714C5.335 14.4414 5.244 14.4858 5.15534 14.5044C5.06667 14.5231 4.98267 14.5254 4.90334 14.5114C4.824 14.4928 4.754 14.4648 4.69334 14.4274C4.63267 14.3854 4.586 14.3434 4.55334 14.3014L3.94434 13.4824L7.06634 10.8364H8.65534V19.5794H10.4123ZM18.7924 19.2294C19.0024 19.2294 19.1658 19.2878 19.2824 19.4044C19.4038 19.5211 19.4644 19.6751 19.4644 19.8664V21.0004H12.4224V20.3704C12.4224 20.2491 12.4481 20.1184 12.4994 19.9784C12.5508 19.8338 12.6371 19.7031 12.7584 19.5864L15.7684 16.5694C16.0251 16.3128 16.2514 16.0678 16.4474 15.8344C16.6434 15.5964 16.8068 15.3654 16.9374 15.1414C17.0681 14.9128 17.1661 14.6818 17.2314 14.4484C17.2968 14.2151 17.3294 13.9701 17.3294 13.7134C17.3294 13.2608 17.2128 12.9178 16.9794 12.6844C16.7461 12.4464 16.4171 12.3274 15.9924 12.3274C15.8058 12.3274 15.6331 12.3554 15.4744 12.4114C15.3204 12.4628 15.1804 12.5351 15.0544 12.6284C14.9331 12.7218 14.8281 12.8314 14.7394 12.9574C14.6508 13.0834 14.5854 13.2211 14.5434 13.3704C14.4594 13.6038 14.3451 13.7601 14.2004 13.8394C14.0604 13.9141 13.8598 13.9304 13.5984 13.8884L12.5764 13.7064C12.6511 13.2118 12.7911 12.7778 12.9964 12.4044C13.2018 12.0311 13.4584 11.7208 13.7664 11.4734C14.0744 11.2261 14.4268 11.0418 14.8234 10.9204C15.2201 10.7944 15.6471 10.7314 16.1044 10.7314C16.5851 10.7314 17.0214 10.8038 17.4134 10.9484C17.8101 11.0884 18.1484 11.2868 18.4284 11.5434C18.7084 11.7954 18.9254 12.1011 19.0794 12.4604C19.2334 12.8198 19.3104 13.2164 19.3104 13.6504C19.3104 14.0238 19.2568 14.3691 19.1494 14.6864C19.0421 15.0038 18.8951 15.3071 18.7084 15.5964C18.5264 15.8811 18.3141 16.1588 18.0714 16.4294C17.8288 16.7001 17.5721 16.9731 17.3014 17.2484L15.1454 19.4534C15.3834 19.3834 15.6191 19.3298 15.8524 19.2924C16.0858 19.2504 16.3051 19.2294 16.5104 19.2294H18.7924ZM21.4535 13.7064C21.5282 13.2118 21.6682 12.7778 21.8735 12.4044C22.0789 12.0311 22.3355 11.7208 22.6435 11.4734C22.9515 11.2261 23.3015 11.0418 23.6935 10.9204C24.0902 10.7944 24.5172 10.7314 24.9745 10.7314C25.4599 10.7314 25.8939 10.8014 26.2765 10.9414C26.6639 11.0768 26.9905 11.2634 27.2565 11.5014C27.5225 11.7394 27.7255 12.0171 27.8655 12.3344C28.0102 12.6518 28.0825 12.9924 28.0825 13.3564C28.0825 13.6784 28.0475 13.9631 27.9775 14.2104C27.9122 14.4531 27.8119 14.6654 27.6765 14.8474C27.5459 15.0294 27.3825 15.1834 27.1865 15.3094C26.9952 15.4354 26.7735 15.5404 26.5215 15.6244C27.6882 16.0071 28.2715 16.7841 28.2715 17.9554C28.2715 18.4734 28.1759 18.9308 27.9845 19.3274C27.7932 19.7194 27.5365 20.0484 27.2145 20.3144C26.8925 20.5804 26.5169 20.7811 26.0875 20.9164C25.6629 21.0471 25.2172 21.1124 24.7505 21.1124C24.2559 21.1124 23.8195 21.0564 23.4415 20.9444C23.0635 20.8324 22.7299 20.6644 22.4405 20.4404C22.1559 20.2164 21.9109 19.9364 21.7055 19.6004C21.5002 19.2598 21.3205 18.8631 21.1665 18.4104L22.0205 18.0604C22.2445 17.9671 22.4522 17.9414 22.6435 17.9834C22.8395 18.0254 22.9795 18.1281 23.0635 18.2914C23.1569 18.4688 23.2549 18.6321 23.3575 18.7814C23.4649 18.9308 23.5839 19.0614 23.7145 19.1734C23.8452 19.2808 23.9922 19.3648 24.1555 19.4254C24.3235 19.4861 24.5149 19.5164 24.7295 19.5164C25.0002 19.5164 25.2359 19.4721 25.4365 19.3834C25.6372 19.2948 25.8052 19.1804 25.9405 19.0404C26.0759 18.8958 26.1762 18.7348 26.2415 18.5574C26.3115 18.3754 26.3465 18.1958 26.3465 18.0184C26.3465 17.7851 26.3255 17.5751 26.2835 17.3884C26.2415 17.1971 26.1435 17.0361 25.9895 16.9054C25.8402 16.7701 25.6162 16.6674 25.3175 16.5974C25.0235 16.5228 24.6222 16.4854 24.1135 16.4854V15.1274C24.5382 15.1274 24.8859 15.0924 25.1565 15.0224C25.4272 14.9524 25.6395 14.8544 25.7935 14.7284C25.9475 14.6024 26.0525 14.4508 26.1085 14.2734C26.1692 14.0961 26.1995 13.9024 26.1995 13.6924C26.1995 13.2491 26.0829 12.9108 25.8495 12.6774C25.6209 12.4441 25.2942 12.3274 24.8695 12.3274C24.6829 12.3274 24.5102 12.3554 24.3515 12.4114C24.1975 12.4628 24.0575 12.5351 23.9315 12.6284C23.8102 12.7218 23.7052 12.8314 23.6165 12.9574C23.5279 13.0834 23.4625 13.2211 23.4205 13.3704C23.3319 13.6038 23.2175 13.7601 23.0775 13.8394C22.9375 13.9141 22.7345 13.9304 22.4685 13.8884L21.4535 13.7064Z"
                    fill={tintColor}
                />
            </svg>
        );
    }

    throw new Error("Invalid icon type");
}

export class TabbarItem extends React.Component<Props, State> {
    imageTintColor(
        itemState: ItemState,
        hovered: boolean,
        focused: boolean,
        pressed: boolean,
    ): string {
        if (itemState === "disabled") {
            return Color.offBlack64;
        } else if (itemState === "active") {
            return Color.blue;
        } else if (pressed) {
            return Color.white;
        } else if (hovered) {
            return Color.blue;
        }
        return Color.offBlack64;
    }

    render() {
        const {onPress, itemType, itemState} = this.props;
        return (
            <Clickable onClick={onPress} disabled={itemState === "disabled"}>
                {({hovered, focused, pressed}) => {
                    const tintColor = this.imageTintColor(
                        itemState,
                        hovered,
                        focused,
                        pressed,
                    );

                    return (
                        <View
                            style={[
                                styles.base,
                                itemState !== "disabled" &&
                                    hovered &&
                                    styles.hovered,
                                focused && styles.focused,
                                pressed && styles.pressed,
                            ]}
                        >
                            <View
                                style={[
                                    styles.innerBox,
                                    pressed && styles.innerBoxPressed,
                                ]}
                            >
                                <IconAsset
                                    type={itemType}
                                    tintColor={tintColor}
                                />
                            </View>
                            {itemState === "active" && (
                                <View
                                    style={{
                                        position: "absolute",
                                        boxSizing: "border-box",
                                        bottom: 3,
                                        width: 36,
                                        height: 3,
                                        marginLeft: 2,
                                        backgroundColor: tintColor,
                                    }}
                                ></View>
                            )}
                        </View>
                    );
                }}
            </Clickable>
        );
    }
}

type TabbarState = {
    selectedItem: number,
};
export class Tabbar extends React.Component<{}, TabbarState> {
    state: TabbarState = {
        selectedItem: 0,
    };
    render() {
        const items = ["Geometry", "Operators", "Numbers"];
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    background: Color.offWhite,
                    paddingTop: 2,
                    paddingBottom: 2,
                    borderTop: `1px solid ${Color.offBlack50}`,
                    borderBottom: `1px solid ${Color.offBlack50}`,
                }}
            >
                {items.map((item, index) => (
                    <TabbarItem
                        itemState={
                            index === this.state.selectedItem
                                ? "active"
                                : "inactive"
                        }
                        itemType={item}
                        onPress={() => {
                            this.setState({selectedItem: index});
                            // bubble up the action
                        }}
                    />
                ))}
            </View>
        );
    }
}
