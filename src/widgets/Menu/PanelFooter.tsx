import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, OpenNewIcon, CogIcon, MetamaskIcon,  SvgProps } from "../../components/Svg";
import Text from "../../components/Text/Text";
import Flex from "../../components/Flex/Flex";
import Dropdown from "../../components/Dropdown/Dropdown";
import Link from "../../components/Link/Link";
import LinkExternal from "../../components/Link/LinkExternal";
import Skeleton from "../../components/Skeleton/Skeleton";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import MenuButton from "./MenuButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import Web3 from 'web3';

interface Props extends PanelProps, PushedProps {}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

declare const window: any;

const openInMetamask = (callback:any) => {

	const provider = window.web3.currentProvider
              provider.sendAsync({
                method: 'metamask_watchAsset',
                params: {
                  "type":"ERC20",
                  "options":{
                    "address": "0x396600A51958b45957726BC097f2217DeAB915Db",
                    "symbol": "PANTSU",
                    "decimals": 18,
                    "image": "https://pantsuswap.com/images/token_logo.png",
                  },
                },
                id: Math.round(Math.random() * 100000),
              }, (err:any, added:any) => {
                console.log('provider returned', err, added)
                if (err || 'error' in added) {
                  return
                }
              })

}
const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  cakePriceLink,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        {cakePriceUsd ? (
          <PriceLink href={cakePriceLink} target="_blank">
            <PancakeRoundIcon width="24px" mr="8px" />
            <Text color="text" fontSize="15px" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
          </PriceLink>
        ) : (
          <Skeleton width={80} height={24} />
        )}
	<Button size="sm" variant="text" onClick={openInMetamask}><MetamaskIcon /><OpenNewIcon /></Button>
      </SocialEntry>
      <SettingsEntry>
        {/*<Button variant="text" onClick={() => toggleTheme(!isDark)}>*/}
        {/*/!* alignItems center is a Safari fix *!/*/}
        {/*<Flex alignItems="center">*/}
        {/*<SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />*/}
        {/*<Text color="textDisabled" mx="4px">*/}
        {/*/*/}
        {/*</Text>*/}
        {/*<MoonIcon color={isDark ? "text" : "textDisabled"} width="24px" />*/}
        {/*</Flex>*/}
        {/*</Button>*/}
        <Flex>
          {socials.map((social, index) => {
            const Icon = Icons[social.icon];
            const iconProps = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } };
            const mr = index < socials.length - 1 ? "20px" : 0;
            if (social.items) {
              return (
                <Dropdown
                  key={social.label}
                  position="top"
                  target={<Icon {...iconProps} mr={mr} style={{ display: "flex", alignItems: "center" }} />}
                >
                  {social.items.map((item) => (
                    <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle">
                      {item.label}
                    </Link>
                  ))}
                </Dropdown>
              );
            }
            return (
              <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
                <Icon {...iconProps} />
              </Link>
            );
          })}
        </Flex>
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
