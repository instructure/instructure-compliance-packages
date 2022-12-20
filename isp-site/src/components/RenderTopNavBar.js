// Modules
import { View, TopNavBar, IconInstructureLogoSolid, Text, IconQuestionLine } from '@instructure/ui'

// Variables
const Brands = ['canvas', 'mastery', 'elevate', 'impact']

// Component
export default function RenderTopNavBar() { return(
  <View
    id="nav"
    as="div"
  >
    <TopNavBar>
      {() => ( <TopNavBar.Layout
        navLabel="main"

        desktopConfig={{
          hideActionsUserSeparator: false
        }}

        smallViewportConfig={{
          dropdownMenuToggleButtonLabel: 'Toggle Menu',
          dropdownMenuLabel: 'Main Menu',
        }}

        themeOverride={{
          desktopBackground: "#287A9F",
          smallViewportBackground: "#287A9F"
        }}

        renderBrand={( <TopNavBar.Brand
          screenReaderLabel="Instructure"
          
          renderName={(
            <View as="div" minWidth="7rem">
              <Text
                as="div"
                color="primary-inverse"
                transform="uppercase"
                size="small"
                weight="bold"
                lineHeight="condensed"
              >
                Instructure
              </Text>
              {/* <Text
                as="div"
                color="primary-inverse"
                size="large"
                weight="normal"
                lineHeight="condensed"
              >
                Security Packages
              </Text> */}
            </View>
          )}

          renderIcon={(
            <IconInstructureLogoSolid
              size="small"
              color="primary-inverse"
              height="2.5rem"
              width="2.5rem"
            />
          )}

          iconBackground="#287A9F"
          href="#/"
        /> )}

        renderMenuItems={(
          <TopNavBar.MenuItems
            listLabel="Page navigation"
            currentPageId=""
            renderHiddenItemsMenuTriggerLabel={(
              hiddenChildrenCount
            ) => `${hiddenChildrenCount} More`}
          >
            {Brands.map((brand) => (
              <TopNavBar.Item
                id={brand}
                key={brand}
                href={`#/${brand}`}
              >
                {`${brand[0].toUpperCase()}${brand.slice(1)}`}
              </TopNavBar.Item>
            ))}
          </TopNavBar.MenuItems>
        )}

        renderActionItems={(
          <TopNavBar.ActionItems
            listLabel="Actions"
            renderHiddenItemsMenuTriggerLabel={(
              hiddenChildrenCount
            ) => `${hiddenChildrenCount} more actions`}
          >
          <TopNavBar.Item
                id="help"
                variant="icon"
                tooltip="Help"
                renderIcon={<IconQuestionLine />}
                onClick={() => {
                  console.log('Info')
                }}
              >
                Help
              </TopNavBar.Item>
          </TopNavBar.ActionItems>
        )}

      />)}
    </TopNavBar>
  </View>
)}