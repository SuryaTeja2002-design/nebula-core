#include <iostream>
#include <thread>
#include <chrono>
#include <cstdlib>
#include <cpr/cpr.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

int main() {
    std::cout << "🧠 Market Engine Started..." << std::endl;

    while (true) {
        std::cout << "Matching orders..." << std::endl;

        int volume = rand() % 2000000;
        json payload = { {"volume", volume} };

        cpr::Response res = cpr::Post(
            cpr::Url{"http://ai:6000/detect"},
            cpr::Header{{"Content-Type", "application/json"}},
            cpr::Body{payload.dump()}
        );

        if (res.status_code == 200) {
            auto result = json::parse(res.text);
            if (result["fraud"]) {
                std::cout << "⚠️ FRAUD DETECTED: " << result["reason"] << std::endl;
            }
        }

        std::this_thread::sleep_for(std::chrono::seconds(2));
    }

    return 0;
}
