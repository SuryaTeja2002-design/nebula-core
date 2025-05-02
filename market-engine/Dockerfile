FROM gcc:11

WORKDIR /app

# Install required tools and dependencies
RUN apt-get update && apt-get install -y \
    cmake \
    git \
    curl \
    make \
    libcurl4-openssl-dev \
    openssl \
    libssl-dev \
    nlohmann-json3-dev

# Clone and build CPR with shared library support
RUN git clone https://github.com/libcpr/cpr.git && \
    cd cpr && \
    cmake -S . -B build -DCPR_BUILD_TESTS=OFF -DBUILD_SHARED_LIBS=ON -DCPR_FORCE_USE_SYSTEM_CURL=ON && \
    cmake --build build && \
    cmake --install build && \
    ldconfig  # <--- IMPORTANT: make libcpr.so visible

# Copy your engine code
COPY CMakeLists.txt .
COPY src/ ./src

# Build your C++ engine
RUN cmake -S . -B build && cmake --build build && chmod +x build/market_engine

WORKDIR /app/build
CMD ["./market_engine"]
