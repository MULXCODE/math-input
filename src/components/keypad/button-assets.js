//@flow
import React from "react";

// TODO: This should be an enumeration of all of the possible legal values
type KeyId = string;

export default function buttonAsset({id}: {id: KeyId}) {
    switch (id) {
        case "NUM_0":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.2991 20.36C26.2991 21.872 26.1351 23.18 25.8071 24.284C25.4871 25.388 25.0431 26.304 24.4751 27.032C23.9071 27.76 23.2391 28.3 22.4711 28.652C21.7031 29.004 20.8751 29.18 19.9871 29.18C19.0991 29.18 18.2711 29.004 17.5031 28.652C16.7351 28.3 16.0671 27.76 15.4991 27.032C14.9391 26.304 14.4991 25.388 14.1791 24.284C13.8591 23.18 13.6991 21.872 13.6991 20.36C13.6991 18.848 13.8591 17.54 14.1791 16.436C14.4991 15.324 14.9391 14.408 15.4991 13.688C16.0671 12.96 16.7351 12.42 17.5031 12.068C18.2711 11.708 19.0991 11.528 19.9871 11.528C20.8751 11.528 21.7031 11.708 22.4711 12.068C23.2391 12.42 23.9071 12.96 24.4751 13.688C25.0431 14.408 25.4871 15.324 25.8071 16.436C26.1351 17.54 26.2991 18.848 26.2991 20.36ZM23.6351 20.36C23.6351 19.08 23.5311 18.016 23.3231 17.168C23.1231 16.312 22.8551 15.628 22.5191 15.116C22.1831 14.604 21.7951 14.24 21.3551 14.024C20.9151 13.808 20.4591 13.7 19.9871 13.7C19.5071 13.7 19.0471 13.808 18.6071 14.024C18.1751 14.24 17.7911 14.604 17.4551 15.116C17.1191 15.628 16.8511 16.312 16.6511 17.168C16.4511 18.016 16.3511 19.08 16.3511 20.36C16.3511 21.64 16.4511 22.708 16.6511 23.564C16.8511 24.412 17.1191 25.092 17.4551 25.604C17.7911 26.116 18.1751 26.48 18.6071 26.696C19.0471 26.912 19.5071 27.02 19.9871 27.02C20.4591 27.02 20.9151 26.912 21.3551 26.696C21.7951 26.48 22.1831 26.116 22.5191 25.604C22.8551 25.092 23.1231 24.412 23.3231 23.564C23.5311 22.708 23.6351 21.64 23.6351 20.36Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_1":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25.3631 27.044V29H15.9431V27.044H19.5431V16.22C19.5431 15.836 19.5551 15.444 19.5791 15.044L16.8071 17.384C16.6871 17.48 16.5631 17.544 16.4351 17.576C16.3151 17.6 16.1991 17.6 16.0871 17.576C15.9831 17.552 15.8871 17.516 15.7991 17.468C15.7191 17.412 15.6551 17.352 15.6071 17.288L14.8031 16.16L20.0111 11.684H22.1111V27.044H25.3631Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_2":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.8471 26.564C25.1271 26.564 25.3471 26.648 25.5071 26.816C25.6671 26.976 25.7471 27.184 25.7471 27.44V29H14.0591V28.124C14.0591 27.948 14.0951 27.764 14.1671 27.572C14.2391 27.38 14.3551 27.204 14.5151 27.044L19.8911 21.656C20.3471 21.2 20.7511 20.764 21.1031 20.348C21.4631 19.932 21.7671 19.516 22.0151 19.1C22.2711 18.684 22.4631 18.264 22.5911 17.84C22.7271 17.408 22.7951 16.956 22.7951 16.484C22.7951 16.028 22.7231 15.628 22.5791 15.284C22.4431 14.932 22.2511 14.644 22.0031 14.42C21.7631 14.188 21.4711 14.016 21.1271 13.904C20.7911 13.784 20.4191 13.724 20.0111 13.724C19.6191 13.724 19.2551 13.78 18.9191 13.892C18.5911 14.004 18.2951 14.16 18.0311 14.36C17.7751 14.56 17.5591 14.8 17.3831 15.08C17.2151 15.352 17.0911 15.652 17.0111 15.98C16.8911 16.308 16.7351 16.528 16.5431 16.64C16.3591 16.752 16.0871 16.776 15.7271 16.712L14.3711 16.472C14.4911 15.656 14.7151 14.94 15.0431 14.324C15.3791 13.708 15.7991 13.196 16.3031 12.788C16.8071 12.372 17.3831 12.06 18.0311 11.852C18.6871 11.636 19.3951 11.528 20.1551 11.528C20.9231 11.528 21.6271 11.644 22.2671 11.876C22.9151 12.1 23.4711 12.424 23.9351 12.848C24.4071 13.264 24.7751 13.772 25.0391 14.372C25.3031 14.972 25.4351 15.648 25.4351 16.4C25.4351 17.04 25.3391 17.632 25.1471 18.176C24.9631 18.72 24.7111 19.24 24.3911 19.736C24.0711 20.232 23.6951 20.716 23.2631 21.188C22.8391 21.652 22.3911 22.124 21.9191 22.604L17.7431 26.876C18.0871 26.78 18.4311 26.704 18.7751 26.648C19.1271 26.592 19.4591 26.564 19.7711 26.564H24.8471Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_3":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.4551 16.472C14.5751 15.656 14.7991 14.94 15.1271 14.324C15.4631 13.708 15.8831 13.196 16.3871 12.788C16.8911 12.372 17.4671 12.06 18.1151 11.852C18.7711 11.636 19.4791 11.528 20.2391 11.528C21.0071 11.528 21.7031 11.64 22.3271 11.864C22.9591 12.08 23.4991 12.384 23.9471 12.776C24.4031 13.168 24.7511 13.636 24.9911 14.18C25.2391 14.724 25.3631 15.32 25.3631 15.968C25.3631 16.52 25.2951 17.008 25.1591 17.432C25.0311 17.848 24.8431 18.216 24.5951 18.536C24.3551 18.856 24.0591 19.124 23.7071 19.34C23.3551 19.556 22.9591 19.736 22.5191 19.88C23.5911 20.192 24.3951 20.692 24.9311 21.38C25.4671 22.06 25.7351 22.916 25.7351 23.948C25.7351 24.78 25.5791 25.52 25.2671 26.168C24.9551 26.816 24.5311 27.364 23.9951 27.812C23.4671 28.26 22.8471 28.604 22.1351 28.844C21.4311 29.076 20.6831 29.192 19.8911 29.192C19.0031 29.192 18.2351 29.088 17.5871 28.88C16.9391 28.664 16.3791 28.36 15.9071 27.968C15.4431 27.568 15.0551 27.088 14.7431 26.528C14.4311 25.968 14.1671 25.34 13.9511 24.644L15.0671 24.176C15.3631 24.048 15.6431 24.012 15.9071 24.068C16.1791 24.124 16.3751 24.272 16.4951 24.512C16.6231 24.768 16.7671 25.044 16.9271 25.34C17.0871 25.628 17.2911 25.896 17.5391 26.144C17.7951 26.384 18.1071 26.588 18.4751 26.756C18.8511 26.916 19.3111 26.996 19.8551 26.996C20.4071 26.996 20.8871 26.908 21.2951 26.732C21.7111 26.548 22.0551 26.316 22.3271 26.036C22.6071 25.748 22.8151 25.428 22.9511 25.076C23.0871 24.724 23.1551 24.376 23.1551 24.032C23.1551 23.6 23.1031 23.204 22.9991 22.844C22.8951 22.476 22.6911 22.164 22.3871 21.908C22.0911 21.652 21.6671 21.452 21.1151 21.308C20.5711 21.156 19.8551 21.08 18.9671 21.08V19.22C19.6951 19.212 20.3071 19.14 20.8031 19.004C21.3071 18.86 21.7071 18.668 22.0031 18.428C22.3071 18.18 22.5231 17.884 22.6511 17.54C22.7871 17.196 22.8551 16.82 22.8551 16.412C22.8551 15.972 22.7871 15.584 22.6511 15.248C22.5151 14.912 22.3231 14.632 22.0751 14.408C21.8351 14.176 21.5471 14.004 21.2111 13.892C20.8751 13.78 20.5031 13.724 20.0951 13.724C19.7031 13.724 19.3391 13.78 19.0031 13.892C18.6751 14.004 18.3791 14.16 18.1151 14.36C17.8591 14.56 17.6431 14.8 17.4671 15.08C17.2911 15.352 17.1631 15.652 17.0831 15.98C16.9711 16.308 16.8191 16.528 16.6271 16.64C16.4431 16.752 16.1711 16.776 15.8111 16.712L14.4551 16.472Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_4":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M21.6911 22.616V16.304C21.6911 15.8 21.7271 15.248 21.7991 14.648L15.9911 22.616H21.6911ZM26.3231 22.616V24.104C26.3231 24.248 26.2751 24.372 26.1791 24.476C26.0911 24.58 25.9551 24.632 25.7711 24.632H23.9351V29H21.6911V24.632H14.2151C14.0311 24.632 13.8711 24.58 13.7351 24.476C13.6071 24.364 13.5231 24.228 13.4831 24.068L13.2191 22.748L21.5111 11.708H23.9351V22.616H26.3231Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_5":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17.6591 18.104C18.0751 18.016 18.4711 17.952 18.8471 17.912C19.2311 17.872 19.5991 17.852 19.9511 17.852C20.8551 17.852 21.6511 17.988 22.3391 18.26C23.0351 18.524 23.6151 18.892 24.0791 19.364C24.5511 19.836 24.9031 20.392 25.1351 21.032C25.3751 21.664 25.4951 22.352 25.4951 23.096C25.4951 24.016 25.3351 24.852 25.0151 25.604C24.6951 26.356 24.2511 27 23.6831 27.536C23.1151 28.064 22.4431 28.472 21.6671 28.76C20.8991 29.048 20.0671 29.192 19.1711 29.192C18.6431 29.192 18.1391 29.14 17.6591 29.036C17.1871 28.932 16.7431 28.792 16.3271 28.616C15.9111 28.432 15.5271 28.224 15.1751 27.992C14.8231 27.752 14.5071 27.504 14.2271 27.248L15.0191 26.144C15.1871 25.904 15.4111 25.784 15.6911 25.784C15.8671 25.784 16.0591 25.848 16.2671 25.976C16.4751 26.104 16.7151 26.244 16.9871 26.396C17.2671 26.54 17.5951 26.676 17.9711 26.804C18.3471 26.932 18.7951 26.996 19.3151 26.996C19.8831 26.996 20.3911 26.904 20.8391 26.72C21.2871 26.536 21.6631 26.28 21.9671 25.952C22.2791 25.616 22.5151 25.216 22.6751 24.752C22.8351 24.288 22.9151 23.78 22.9151 23.228C22.9151 22.724 22.8391 22.272 22.6871 21.872C22.5431 21.472 22.3231 21.132 22.0271 20.852C21.7391 20.572 21.3751 20.36 20.9351 20.216C20.4951 20.064 19.9871 19.988 19.4111 19.988C18.9871 19.988 18.5511 20.024 18.1031 20.096C17.6631 20.168 17.2151 20.28 16.7591 20.432L15.1511 19.976L16.5671 11.72H24.9311V12.836C24.9311 13.204 24.8151 13.504 24.5831 13.736C24.3511 13.968 23.9631 14.084 23.4191 14.084H18.3551L17.6591 18.104Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_6":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.9751 27.056C20.4951 27.056 20.9711 26.972 21.4031 26.804C21.8351 26.628 22.2031 26.388 22.5071 26.084C22.8191 25.78 23.0591 25.42 23.2271 25.004C23.3951 24.588 23.4791 24.136 23.4791 23.648C23.4791 23.12 23.3951 22.648 23.2271 22.232C23.0671 21.808 22.8351 21.452 22.5311 21.164C22.2351 20.876 21.8751 20.656 21.4511 20.504C21.0351 20.344 20.5751 20.264 20.0711 20.264C19.5511 20.264 19.0791 20.352 18.6551 20.528C18.2391 20.704 17.8831 20.944 17.5871 21.248C17.2911 21.552 17.0631 21.908 16.9031 22.316C16.7431 22.724 16.6631 23.156 16.6631 23.612C16.6631 24.124 16.7351 24.592 16.8791 25.016C17.0231 25.44 17.2351 25.804 17.5151 26.108C17.7951 26.404 18.1391 26.636 18.5471 26.804C18.9631 26.972 19.4391 27.056 19.9751 27.056ZM19.0271 18.08C18.8991 18.24 18.7751 18.392 18.6551 18.536C18.5431 18.68 18.4311 18.824 18.3191 18.968C18.6871 18.76 19.0911 18.596 19.5311 18.476C19.9711 18.356 20.4431 18.296 20.9471 18.296C21.6191 18.296 22.2631 18.408 22.8791 18.632C23.4951 18.848 24.0351 19.176 24.4991 19.616C24.9711 20.048 25.3471 20.588 25.6271 21.236C25.9071 21.876 26.0471 22.616 26.0471 23.456C26.0471 24.256 25.8991 25.004 25.6031 25.7C25.3151 26.396 24.9071 27.004 24.3791 27.524C23.8511 28.036 23.2151 28.444 22.4711 28.748C21.7351 29.044 20.9191 29.192 20.0231 29.192C19.1271 29.192 18.3191 29.048 17.5991 28.76C16.8791 28.472 16.2631 28.068 15.7511 27.548C15.2471 27.02 14.8591 26.388 14.5871 25.652C14.3151 24.916 14.1791 24.096 14.1791 23.192C14.1791 22.408 14.3471 21.588 14.6831 20.732C15.0191 19.876 15.5391 18.976 16.2431 18.032L20.4911 12.332C20.6191 12.164 20.8031 12.02 21.0431 11.9C21.2911 11.78 21.5671 11.72 21.8711 11.72H24.1511L19.0271 18.08Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_7":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M26.0831 11.72V12.86C26.0831 13.196 26.0471 13.468 25.9751 13.676C25.9031 13.884 25.8311 14.06 25.7591 14.204L18.9311 28.1C18.8111 28.356 18.6391 28.572 18.4151 28.748C18.1991 28.916 17.9111 29 17.5511 29H15.6911L22.6511 15.332C22.7791 15.084 22.9071 14.86 23.0351 14.66C23.1631 14.46 23.3071 14.268 23.4671 14.084H14.8391C14.6791 14.084 14.5391 14.024 14.4191 13.904C14.2991 13.776 14.2391 13.632 14.2391 13.472V11.72H26.0831Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_8":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.9991 27.152C20.5191 27.152 20.9831 27.08 21.3911 26.936C21.7991 26.784 22.1391 26.576 22.4111 26.312C22.6911 26.04 22.9031 25.72 23.0471 25.352C23.1911 24.984 23.2631 24.584 23.2631 24.152C23.2631 23.624 23.1791 23.168 23.0111 22.784C22.8511 22.4 22.6231 22.084 22.3271 21.836C22.0391 21.58 21.6951 21.392 21.2951 21.272C20.8951 21.144 20.4631 21.08 19.9991 21.08C19.5351 21.08 19.1031 21.144 18.7031 21.272C18.3031 21.392 17.9551 21.58 17.6591 21.836C17.3711 22.084 17.1431 22.4 16.9751 22.784C16.8151 23.168 16.7351 23.624 16.7351 24.152C16.7351 24.584 16.8071 24.984 16.9511 25.352C17.0951 25.72 17.3031 26.04 17.5751 26.312C17.8551 26.576 18.1991 26.784 18.6071 26.936C19.0151 27.08 19.4791 27.152 19.9991 27.152ZM19.9991 13.508C19.5271 13.508 19.1111 13.58 18.7511 13.724C18.3991 13.868 18.1071 14.06 17.8751 14.3C17.6431 14.54 17.4671 14.824 17.3471 15.152C17.2351 15.472 17.1791 15.812 17.1791 16.172C17.1791 16.532 17.2271 16.884 17.3231 17.228C17.4271 17.572 17.5871 17.88 17.8031 18.152C18.0271 18.416 18.3191 18.628 18.6791 18.788C19.0391 18.948 19.4791 19.028 19.9991 19.028C20.5191 19.028 20.9591 18.948 21.3191 18.788C21.6791 18.628 21.9671 18.416 22.1831 18.152C22.4071 17.88 22.5671 17.572 22.6631 17.228C22.7671 16.884 22.8191 16.532 22.8191 16.172C22.8191 15.812 22.7591 15.472 22.6391 15.152C22.5271 14.824 22.3511 14.54 22.1111 14.3C21.8791 14.06 21.5871 13.868 21.2351 13.724C20.8831 13.58 20.4711 13.508 19.9991 13.508ZM22.7231 19.988C23.7871 20.316 24.5831 20.836 25.1111 21.548C25.6471 22.26 25.9151 23.144 25.9151 24.2C25.9151 24.96 25.7711 25.648 25.4831 26.264C25.1951 26.88 24.7911 27.404 24.2711 27.836C23.7511 28.268 23.1271 28.604 22.3991 28.844C21.6791 29.076 20.8791 29.192 19.9991 29.192C19.1191 29.192 18.3151 29.076 17.5871 28.844C16.8671 28.604 16.2471 28.268 15.7271 27.836C15.2071 27.404 14.8031 26.88 14.5151 26.264C14.2271 25.648 14.0831 24.96 14.0831 24.2C14.0831 23.144 14.3471 22.26 14.8751 21.548C15.4111 20.836 16.2111 20.316 17.2751 19.988C16.4111 19.644 15.7591 19.144 15.3191 18.488C14.8871 17.832 14.6711 17.044 14.6711 16.124C14.6711 15.476 14.7991 14.872 15.0551 14.312C15.3111 13.752 15.6711 13.268 16.1351 12.86C16.6071 12.444 17.1711 12.12 17.8271 11.888C18.4831 11.648 19.2071 11.528 19.9991 11.528C20.7911 11.528 21.5111 11.648 22.1591 11.888C22.8151 12.12 23.3751 12.444 23.8391 12.86C24.3111 13.268 24.6751 13.752 24.9311 14.312C25.1951 14.872 25.3271 15.476 25.3271 16.124C25.3271 17.044 25.1071 17.832 24.6671 18.488C24.2351 19.144 23.5871 19.644 22.7231 19.988Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NUM_9":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16.7351 16.856C16.7351 17.88 17.0071 18.668 17.5511 19.22C18.1031 19.764 18.8711 20.036 19.8551 20.036C20.3831 20.036 20.8471 19.952 21.2471 19.784C21.6551 19.616 21.9991 19.392 22.2791 19.112C22.5591 18.824 22.7711 18.492 22.9151 18.116C23.0591 17.732 23.1311 17.324 23.1311 16.892C23.1311 16.388 23.0511 15.94 22.8911 15.548C22.7391 15.148 22.5191 14.808 22.2311 14.528C21.9511 14.248 21.6151 14.036 21.2231 13.892C20.8311 13.74 20.4031 13.664 19.9391 13.664C19.4511 13.664 19.0111 13.744 18.6191 13.904C18.2271 14.064 17.8911 14.288 17.6111 14.576C17.3311 14.856 17.1151 15.192 16.9631 15.584C16.8111 15.968 16.7351 16.392 16.7351 16.856ZM21.1631 22.22C21.3231 22.02 21.4711 21.832 21.6071 21.656C21.7431 21.472 21.8711 21.288 21.9911 21.104C21.5751 21.4 21.1111 21.628 20.5991 21.788C20.0871 21.94 19.5431 22.016 18.9671 22.016C18.3431 22.016 17.7431 21.912 17.1671 21.704C16.5911 21.488 16.0791 21.172 15.6311 20.756C15.1831 20.332 14.8231 19.812 14.5511 19.196C14.2871 18.572 14.1551 17.856 14.1551 17.048C14.1551 16.288 14.2951 15.572 14.5751 14.9C14.8631 14.228 15.2631 13.644 15.7751 13.148C16.2871 12.644 16.8991 12.248 17.6111 11.96C18.3231 11.672 19.1111 11.528 19.9751 11.528C20.8311 11.528 21.6071 11.668 22.3031 11.948C22.9991 12.22 23.5911 12.608 24.0791 13.112C24.5671 13.608 24.9431 14.204 25.2071 14.9C25.4711 15.588 25.6031 16.348 25.6031 17.18C25.6031 17.7 25.5551 18.192 25.4591 18.656C25.3711 19.12 25.2391 19.572 25.0631 20.012C24.8951 20.444 24.6871 20.872 24.4391 21.296C24.1991 21.712 23.9271 22.136 23.6231 22.568L19.5551 28.4C19.4351 28.576 19.2551 28.72 19.0151 28.832C18.7831 28.944 18.5191 29 18.2231 29H15.8591L21.1631 22.22Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "LEFT_PAREN":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M22 10C17 16 17 24 22 30"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );
        case "RIGHT_PAREN":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19 10C24 16 24 24 19 30"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );
        case "MINUS":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27 20H13"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );
        case "PLUS":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M27 20H13"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 13V27"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );
        case "TIMES":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.9498 24.9493L15.0503 15.0498"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M24.9498 15.0507L15.0503 24.9502"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );

        case "BACKSPACE":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 20L16 14H28.1716V26L16 26L10 20ZM8.58579 18.5858L14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H28.1716C29.2761 12 30.1716 12.8954 30.1716 14V26C30.1716 27.1046 29.2761 28 28.1716 28H16C15.4696 28 14.9609 27.7893 14.5858 27.4142L8.58579 21.4142C7.80474 20.6332 7.80474 19.3668 8.58579 18.5858ZM22.4645 17.2929L21.1716 18.5858L19.8787 17.2929C19.4882 16.9024 18.855 16.9024 18.4645 17.2929C18.074 17.6834 18.074 18.3166 18.4645 18.7071L19.7574 20L18.4645 21.2929C18.074 21.6834 18.074 22.3166 18.4645 22.7071C18.855 23.0976 19.4882 23.0976 19.8787 22.7071L21.1716 21.4142L22.4645 22.7071C22.855 23.0976 23.4882 23.0976 23.8787 22.7071C24.2693 22.3166 24.2693 21.6834 23.8787 21.2929L22.5858 20L23.8787 18.7071C24.2693 18.3166 24.2693 17.6834 23.8787 17.2929C23.4882 16.9024 22.855 16.9024 22.4645 17.2929Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "DISMISS":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 12C10 10.8954 10.8954 10 12 10H28C29.1046 10 30 10.8954 30 12V21H28V12L12 12V21H10V12ZM19 14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15C19.4477 15 19 14.5523 19 14ZM17 13C16.4477 13 16 13.4477 16 14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13ZM13 14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14ZM20 16C19.4477 16 19 16.4477 19 17C19 17.5523 19.4477 18 20 18C20.5523 18 21 17.5523 21 17C21 16.4477 20.5523 16 20 16ZM16 17C16 16.4477 16.4477 16 17 16C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17ZM14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16ZM22 14C22 13.4477 22.4477 13 23 13C23.5523 13 24 13.4477 24 14C24 14.5523 23.5523 15 23 15C22.4477 15 22 14.5523 22 14ZM23 16C22.4477 16 22 16.4477 22 17C22 17.5523 22.4477 18 23 18C23.5523 18 24 17.5523 24 17C24 16.4477 23.5523 16 23 16ZM25 14C25 13.4477 25.4477 13 26 13C26.5523 13 27 13.4477 27 14C27 14.5523 26.5523 15 26 15C25.4477 15 25 14.5523 25 14ZM26 16C25.4477 16 25 16.4477 25 17C25 17.5523 25.4477 18 26 18C26.5523 18 27 17.5523 27 17C27 16.4477 26.5523 16 26 16ZM16 20C16 19.4477 16.4477 19 17 19H23C23.5523 19 24 19.4477 24 20C24 20.5523 23.5523 21 23 21H17C16.4477 21 16 20.5523 16 20ZM26.7071 25.7071C27.0976 25.3166 27.0976 24.6834 26.7071 24.2929C26.3166 23.9024 25.6834 23.9024 25.2929 24.2929L20 29.5858L14.7071 24.2929C14.3166 23.9024 13.6834 23.9024 13.2929 24.2929C12.9024 24.6834 12.9024 25.3166 13.2929 25.7071L19.2929 31.7071C19.6834 32.0976 20.3166 32.0976 20.7071 31.7071L26.7071 25.7071Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "FRAC_INCLUSIVE":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 10C16 9.44772 16.4477 9 17 9H23C23.5523 9 24 9.44772 24 10V16C24 16.5523 23.5523 17 23 17H17C16.4477 17 16 16.5523 16 16V10ZM18 11H22V15H18V11ZM14 20C14 19.4477 14.4477 19 15 19H25C25.5523 19 26 19.4477 26 20C26 20.5523 25.5523 21 25 21H15C14.4477 21 14 20.5523 14 20ZM17 23C16.4477 23 16 23.4477 16 24V30C16 30.5523 16.4477 31 17 31H23C23.5523 31 24 30.5523 24 30V24C24 23.4477 23.5523 23 23 23H17ZM22 25H18V29H22V25Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "NEGATIVE":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.9571 13.2929C13.3476 13.6834 13.3476 14.3166 12.9571 14.7071C11.6871 15.9771 11 17.9485 11 20C11 22.0515 11.6871 24.0229 12.9571 25.2929C13.3476 25.6834 13.3476 26.3166 12.9571 26.7071C12.5666 27.0976 11.9334 27.0976 11.5429 26.7071C9.81292 24.9771 9 22.4485 9 20C9 17.5515 9.81292 15.0229 11.5429 13.2929C11.9334 12.9024 12.5666 12.9024 12.9571 13.2929ZM14 20C14 19.4477 14.4477 19 15 19H25C25.5523 19 26 19.4477 26 20C26 20.5523 25.5523 21 25 21H15C14.4477 21 14 20.5523 14 20ZM28.4571 13.2929C28.0666 12.9024 27.4334 12.9024 27.0429 13.2929C26.6524 13.6834 26.6524 14.3166 27.0429 14.7071C28.3129 15.9771 29 17.9485 29 20C29 22.0515 28.3129 24.0229 27.0429 25.2929C26.6524 25.6834 26.6524 26.3166 27.0429 26.7071C27.4334 27.0976 28.0666 27.0976 28.4571 26.7071C30.1871 24.9771 31 22.4485 31 20C31 17.5515 30.1871 15.0229 28.4571 13.2929Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "DECIMAL":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0)">
                        <circle cx="20" cy="20" r="1.5" fill="#21242C" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <path
                                d="M18.5 18.5H21.5V21.5H18.5V18.5Z"
                                fill="white"
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
        case "RADICAL":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.00012 9C9.00012 8.44772 9.44784 8 10.0001 8H16.0001C16.5524 8 17.0001 8.44772 17.0001 9V15C17.0001 15.5523 16.5524 16 16.0001 16H10.0001C9.44784 16 9.00012 15.5523 9.00012 15V9ZM11.0001 10H15.0001V14H11.0001V10ZM23.0001 12C22.6598 12 22.3429 12.173 22.1589 12.4592L13.9849 25.1744L10.8322 20.4453C10.5258 19.9858 9.90493 19.8616 9.44541 20.1679C8.98588 20.4743 8.8617 21.0952 9.16806 21.5547L13.1681 27.5547C13.3552 27.8354 13.6711 28.0028 14.0084 28C14.3457 27.9972 14.6589 27.8245 14.8413 27.5408L23.5461 14H30.0001C30.5524 14 31.0001 13.5523 31.0001 13C31.0001 12.4477 30.5524 12 30.0001 12H23.0001Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "SQRT":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 21L14 27L23 13H30"
                        stroke="#21242C"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            );
        case "EXP_2":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M33.5791 13.7461C33.4874 13.6545 33.3591 13.6086 33.1941 13.6086H31.4011C31.2397 13.6086 31.0674 13.6251 30.8841 13.6581C30.7007 13.6875 30.5156 13.7296 30.3286 13.7846L32.0226 12.0521C32.2352 11.8358 32.4369 11.6213 32.6276 11.4086C32.8182 11.196 32.9851 10.9778 33.1281 10.7541C33.2747 10.5268 33.3902 10.2885 33.4746 10.0391C33.5589 9.78981 33.6011 9.51847 33.6011 9.22514C33.6011 8.88414 33.5406 8.57247 33.4196 8.29014C33.2986 8.00781 33.1281 7.76764 32.9081 7.56964C32.6881 7.36797 32.4222 7.21214 32.1106 7.10214C31.8026 6.98847 31.4597 6.93164 31.0821 6.93164C30.7227 6.93164 30.3872 6.98114 30.0756 7.08014C29.7639 7.17547 29.4871 7.32031 29.2451 7.51464C29.0031 7.70897 28.8014 7.95281 28.6401 8.24614C28.4787 8.53947 28.3687 8.88047 28.3101 9.26914L29.1131 9.41214C29.3184 9.44514 29.4761 9.43231 29.5861 9.37364C29.6997 9.31131 29.7896 9.18847 29.8556 9.00514C29.8886 8.88781 29.9399 8.77964 30.0096 8.68064C30.0792 8.58164 30.1617 8.49547 30.2571 8.42214C30.3561 8.34881 30.4661 8.29197 30.5871 8.25164C30.7117 8.20764 30.8474 8.18564 30.9941 8.18564C31.3277 8.18564 31.5862 8.27914 31.7696 8.46614C31.9529 8.64947 32.0446 8.91897 32.0446 9.27464C32.0446 9.47631 32.0189 9.66881 31.9676 9.85214C31.9162 10.0355 31.8392 10.217 31.7366 10.3966C31.6339 10.5726 31.5056 10.7541 31.3516 10.9411C31.1976 11.1245 31.0197 11.317 30.8181 11.5186L28.4531 13.8891C28.3577 13.9808 28.2899 14.0835 28.2496 14.1971C28.2092 14.3071 28.1891 14.4098 28.1891 14.5051V15.0001H33.7221V14.1091C33.7221 13.9588 33.6744 13.8378 33.5791 13.7461ZM14 13.0001C14 12.4479 14.4477 12.0001 15 12.0001H25C25.5523 12.0001 26 12.4479 26 13.0001V27.0001C26 27.5524 25.5523 28.0001 25 28.0001H15C14.4477 28.0001 14 27.5524 14 27.0001V13.0001ZM16 14.0001H24V26.0001H16V14.0001Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "EXP":
            return (
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28 8C28 7.44772 28.4477 7 29 7H35C35.5523 7 36 7.44772 36 8V14C36 14.5523 35.5523 15 35 15H29C28.4477 15 28 14.5523 28 14V8ZM30 9H34V13H30V9ZM14 13C14 12.4477 14.4477 12 15 12H25C25.5523 12 26 12.4477 26 13V27C26 27.5523 25.5523 28 25 28H15C14.4477 28 14 27.5523 14 27V13ZM16 14H24V26H16V14Z"
                        fill="#21242C"
                    />
                </svg>
            );
        case "PI":
            return <span>pi</span>;
        case "X":
            return <span>x</span>;

        default:
            throw new Error(`Invalid asset ${id}`);
    }
}
