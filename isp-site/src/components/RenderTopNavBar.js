// Modules
import { View, TopNavBar, IconInstructureLogoSolid, Text } from '@instructure/ui'

// Variables
const Brands = ['Canvas', 'Mastery', 'Elevate', 'Impact']

// Component
export default function RenderTopNavBar() { return(
  <View as="div" margin="0">
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
              <Text
                    as="div"
                    color="primary-inverse"
                    size="large"
                    weight="normal"
                    lineHeight="condensed"
                  >
                    Security Packages
                  </Text>
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

          iconBackground="#0D323F"
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
                  {brand}
                </TopNavBar.Item>
              ))}
          </TopNavBar.MenuItems>
        )}

      />)}
    </TopNavBar>
  </View>
)}