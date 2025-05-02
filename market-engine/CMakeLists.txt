cmake_minimum_required(VERSION 3.10)
project(market_engine)

set(CMAKE_CXX_STANDARD 17)

# Include CPR and OpenSSL
include_directories(/usr/local/include)
link_directories(/usr/local/lib)

add_executable(market_engine src/main.cpp)

# Link CPR + curl + ssl explicitly
target_link_libraries(market_engine PRIVATE cpr curl ssl crypto)
