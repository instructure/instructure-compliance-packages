// Modules
import { View, TopNavBar, IconInstructureLogoSolid, Text, IconQuestionLine, Heading, Link } from '@instructure/ui'
import ParentBrands from './parentBrands'

// Component
function RenderTopNavBar() {

  const Brands = [...ParentBrands]
  Brands.shift()
  
  return(
  <View
    id="nav"
    as="div"
    tabIndex={0}
  >
    <TopNavBar
       inverseColor={true}
    >
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
                themeOverride={{ brandColor: "#333" }}
                as="div"
                color="brand"
                transform="uppercase"
                size="small"
                weight="bold"
                lineHeight="condensed"
              >
                Instructure
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
                id={brand.title}
                key={brand.title}
                href={`#${brand.route}`}
                themeOverride={{ activeIndicatorColor: brand.color }}
              >
                {brand.brandName}
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
              id="itemPopoverExample"
              variant="icon"
              showSubmenuChevron={false}
              tooltip="Help"
              renderIcon={<IconQuestionLine />}
              customPopoverConfig={{
                on: 'click',
                placement: 'bottom end',
                shouldContainFocus: true,
                children: (
                  <View
                    id="help"
                    as="div"
                    padding="medium"
                    width="25rem"
                    role="dialog"
                    tabIndex={0}
                    aria-label="Contact information"
                    position="relative"
                    borderRadius="small"
                  >
                    <Heading level="h3">Contact information</Heading>
                    <Text>This site an its contents are maintained by Instructure, inc.</Text>
                    <hr aria-hidden="true" />

                    <View as="div" margin="medium 0 0">
                      
                        <Text weight="bold">Current customers</Text><br />
                        <Text>Reach out to your designated CSM.</Text>
                    </View>

                    <View as="div" margin="medium 0 0">
                        <Text weight="bold">Prospective customers</Text><br />
                        <Text>Reach out to your sales contact.</Text><br />
                        <Text>For general inquiries email <Link href="mailto:info@instructure.com">info@instructure.com</Link></Text>
                    </View>

                  </View>
                )
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

export default RenderTopNavBar
