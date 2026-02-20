from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a larger viewport to capture the desktop layout
        context = browser.new_context(viewport={"width": 1280, "height": 800})
        page = context.new_page()

        print("Navigating to home page...")
        page.goto("http://localhost:3000")
        page.wait_for_load_state("networkidle")

        # Screenshot 1: Hero Section
        print("Taking screenshot of Hero section...")
        page.screenshot(path="screenshot_hero.png")

        # Screenshot 2: Manifesto Section
        print("Taking screenshot of Manifesto section...")
        manifesto = page.locator("#manifesto")
        manifesto.scroll_into_view_if_needed()
        # Wait a bit for animations
        page.wait_for_timeout(1000)
        page.screenshot(path="screenshot_manifesto.png")

        # Screenshot 3: Footer
        print("Taking screenshot of Footer...")
        footer = page.locator(".footer")
        footer.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path="screenshot_footer.png")

        # Screenshot 4: Modal
        print("Opening modal and taking screenshot...")
        # Scroll back to projects to ensure clicking works
        page.locator("#projects").scroll_into_view_if_needed()
        page.wait_for_timeout(500)

        # Click the first project card
        page.locator(".project-card").first.click()

        # Wait for modal to be active and stable
        page.wait_for_selector(".modal.active", state="visible")
        page.wait_for_timeout(1000) # Wait for transition

        page.screenshot(path="screenshot_modal.png")

        browser.close()
        print("Screenshots captured.")

if __name__ == "__main__":
    run()
