



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled emoji-size-boost is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-8c26e767b0a264423ad015da4d24e232d3bff5e88070d44aca8bd3d8f4a226a5.css" integrity="sha256-jCbnZ7CiZEI60BXaTSTiMtO/9eiAcNRKyovT2PSiJqU=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-d8ed145bdf068fa6112b605071db55ccd9a7045533a2919d609fd28fbdf7d956.css" integrity="sha256-2O0UW98Gj6YRK2BQcdtVzNmnBFUzopGdYJ/Sj7332VY=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-00274be02ca83717fd26c1217d72ead4b257c847581b6c7497ad0a88ccd20723.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>cas-fee-project-1/system.js at systemjs · tbrandenburger/cas-fee-project-1</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars2.githubusercontent.com/u/5287068?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="tbrandenburger/cas-fee-project-1" name="twitter:title" /><meta content="Contribute to cas-fee-project-1 development by creating an account on GitHub." name="twitter:description" />
      <meta content="https://avatars2.githubusercontent.com/u/5287068?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="tbrandenburger/cas-fee-project-1" property="og:title" /><meta content="https://github.com/tbrandenburger/cas-fee-project-1" property="og:url" /><meta content="Contribute to cas-fee-project-1 development by creating an account on GitHub." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/NjEzNDkzODo5OTAzOTc1YzdhMWFmYWQ2ODllZTBjY2NiY2Y1NDJlNjpiOTdlY2JhNGQ1NTM3NGEwMTBhMzc4ZDlmMjcxNTYwYTI4Y2NmN2U5NzcwYWM1OTI1NGZhOGIxNjQyN2RmYWUx--612662c6f02807cefd842dc8eaa9c86a376e576f">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4D387557:4A1E:90DA43A:579F1DCF" name="octolytics-dimension-request_id" /><meta content="6134938" name="octolytics-actor-id" /><meta content="sunseekker1" name="octolytics-actor-login" /><meta content="b2853ea5c20c04d57a792452ec278b335b31fc7f443038aef3bbabd01333b610" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="sunseekker1">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NzgwMTQzMDVkNmQ4NzljNDk3OGFiZWUyMThiYmFhNzk0YmVhMTNiOTk5MGRhMmY1ZDRiMmZlYmFmYzJhMTFiOXx7InJlbW90ZV9hZGRyZXNzIjoiNzcuNTYuMTE3Ljg3IiwicmVxdWVzdF9pZCI6IjREMzg3NTU3OjRBMUU6OTBEQTQzQTo1NzlGMURDRiIsInRpbWVzdGFtcCI6MTQ3MDA0NTY1M30=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="616ad9fdc04333e650f456cb7025c21d33d3dfbd">
    <meta content="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="63246eca2ca3a9895dadcd535d084322">
    

      
  <meta name="description" content="Contribute to cas-fee-project-1 development by creating an account on GitHub.">
  <meta name="go-import" content="github.com/tbrandenburger/cas-fee-project-1 git https://github.com/tbrandenburger/cas-fee-project-1.git">

  <meta content="5287068" name="octolytics-dimension-user_id" /><meta content="tbrandenburger" name="octolytics-dimension-user_login" /><meta content="58465495" name="octolytics-dimension-repository_id" /><meta content="tbrandenburger/cas-fee-project-1" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="58465495" name="octolytics-dimension-repository_network_root_id" /><meta content="tbrandenburger/cas-fee-project-1" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/tbrandenburger/cas-fee-project-1/commits/systemjs.atom" rel="alternate" title="Recent Commits to cas-fee-project-1:systemjs" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/tbrandenburger/cas-fee-project-1/blob/systemjs/frontend/lib/systemjs/system.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production macintosh vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/search" class="js-site-search-form" data-scoped-search-url="/tbrandenburger/cas-fee-project-1/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:6134938" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="tbrandenburger/cas-fee-project-1">This repository</span>
  </div>
    <a class="dropdown-item" href="/tbrandenburger/cas-fee-project-1/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/sunseekker1"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@sunseekker1" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/6134938?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">sunseekker1</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/sunseekker1" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ieCsgC0srYsXpawYahtCqG2cpqARnPyyy1k+rXgG7wztT30lisK1AbAbhkk3mQEIYBbLxf8zvOlaA/PHIkHL2w==" /></div>
          <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SWdKyu5FK4OVeaRlRqiKcf6RkS8syKiIAs7eL92C3vbHrLgsGBBl+TnOwmOqiZz27p79u+H/+/N38heVfgEC1Q==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="58465495" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/tbrandenburger/cas-fee-project-1/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Unwatch
            </span>
          </a>
          <a class="social-count js-social-count" href="/tbrandenburger/cas-fee-project-1/watchers">
            3
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/unstar" class="starred" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="6a5teAT1Kug7a/gHYAMtAGxtWBEB7X3Kum+4J6MYCQRnxVuVRHZYLYFhX+kvVeZksS9XCoGiqri/zVwUq7Tb7g==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar tbrandenburger/cas-fee-project-1"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/tbrandenburger/cas-fee-project-1/stargazers">
          1
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/star" class="unstarred" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HnKh3rCjYorWYIyhzfu7D/3GHCkzikKtbw+gX9BIxx0XFgMVd7ewgMRibkK3IvfUeGE2G9MpY9vnZuWq3z0Pkw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star tbrandenburger/cas-fee-project-1"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/tbrandenburger/cas-fee-project-1/stargazers">
          1
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of tbrandenburger/cas-fee-project-1 to your account"
              aria-label="Fork your own copy of tbrandenburger/cas-fee-project-1 to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/tbrandenburger/cas-fee-project-1/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/tbrandenburger/cas-fee-project-1/network" class="social-count">
      0
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/tbrandenburger" class="url fn" rel="author">tbrandenburger</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/tbrandenburger/cas-fee-project-1" data-pjax="#js-repo-pjax-container">cas-fee-project-1</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/tbrandenburger/cas-fee-project-1/tree/systemjs" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /tbrandenburger/cas-fee-project-1/tree/systemjs" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/tbrandenburger/cas-fee-project-1/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /tbrandenburger/cas-fee-project-1/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">0</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/tbrandenburger/cas-fee-project-1/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /tbrandenburger/cas-fee-project-1/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/tbrandenburger/cas-fee-project-1/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /tbrandenburger/cas-fee-project-1/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/tbrandenburger/cas-fee-project-1/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /tbrandenburger/cas-fee-project-1/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/tbrandenburger/cas-fee-project-1/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /tbrandenburger/cas-fee-project-1/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/tbrandenburger/cas-fee-project-1/blob/8943db20921c1428c7da138e549846a67d547f55/frontend/lib/systemjs/system.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cfb12355c698a90e726cebd1895e5757 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="systemjs"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">systemjs</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/tbrandenburger/cas-fee-project-1/blob/develop/frontend/lib/systemjs/system.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="develop">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/tbrandenburger/cas-fee-project-1/blob/master/frontend/lib/systemjs/system.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/tbrandenburger/cas-fee-project-1/blob/requirejs/frontend/lib/systemjs/system.js"
               data-name="requirejs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="requirejs">
                requirejs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/tbrandenburger/cas-fee-project-1/blob/systemjs/frontend/lib/systemjs/system.js"
               data-name="systemjs"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="systemjs">
                systemjs
              </span>
            </a>
        </div>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Lk2YfP0M0BwQvkVGCAUf/qcvxbUw1juBPE1xbMXfEvJjcsRY2EKpexX0XMO5AQM8GEHvTkWkDPWIOMym85XPNw==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘systemjs’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="systemjs">
            <input type="hidden" name="path" id="path" value="frontend/lib/systemjs/system.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/tbrandenburger/cas-fee-project-1/find/systemjs"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/tbrandenburger/cas-fee-project-1/tree/systemjs"><span>cas-fee-project-1</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/tbrandenburger/cas-fee-project-1/tree/systemjs/frontend"><span>frontend</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/tbrandenburger/cas-fee-project-1/tree/systemjs/frontend/lib"><span>lib</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/tbrandenburger/cas-fee-project-1/tree/systemjs/frontend/lib/systemjs"><span>systemjs</span></a></span><span class="separator">/</span><strong class="final-path">system.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/tbrandenburger/cas-fee-project-1/contributors/systemjs/frontend/lib/systemjs/system.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/tbrandenburger/cas-fee-project-1/raw/systemjs/frontend/lib/systemjs/system.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/tbrandenburger/cas-fee-project-1/blame/systemjs/frontend/lib/systemjs/system.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/tbrandenburger/cas-fee-project-1/commits/systemjs/frontend/lib/systemjs/system.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://mac.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/edit/systemjs/frontend/lib/systemjs/system.js" class="inline-form js-update-url-with-hash" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sfbvVTJO+KTm0oIOLx+ZUxRyvYo0QFyKzTPfq25IWP6Fve8vZIDyVwEtGunjk10fKAICsEx0+0ds2qDnwJMzRA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tbrandenburger/cas-fee-project-1/delete/systemjs/frontend/lib/systemjs/system.js" class="inline-form" data-form-nonce="6bd69bf3f3d5aae8e6c69e1fe962ef95e09ccba3" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="H8et1XdyuxtaANQgahgxCm6zmoABDyYoodDx37TGU+58whVPMfeH/AKoAQTVbYmJEEddEMeUDfJprnytunGEMg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      7 lines (6 sloc)
      <span class="file-info-divider"></span>
    59.9 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">/*</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"> * SystemJS v0.19.35</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"> */</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">!function(){function e(){!function(e){function t(e,r){if(&quot;string&quot;!=typeof e)throw new TypeError(&quot;URL must be a string&quot;);var n=String(e).replace(/^\s+|\s+$/g,&quot;&quot;).match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!n)throw new RangeError(&quot;Invalid URL format&quot;);var a=n[1]||&quot;&quot;,o=n[2]||&quot;&quot;,i=n[3]||&quot;&quot;,s=n[4]||&quot;&quot;,l=n[5]||&quot;&quot;,u=n[6]||&quot;&quot;,d=n[7]||&quot;&quot;,c=n[8]||&quot;&quot;,f=n[9]||&quot;&quot;;if(void 0!==r){var m=r instanceof t?r:new t(r),p=!a&amp;&amp;!s&amp;&amp;!o;!p||d||c||(c=m.search),p&amp;&amp;&quot;/&quot;!==d[0]&amp;&amp;(d=d?(!m.host&amp;&amp;!m.username||m.pathname?&quot;&quot;:&quot;/&quot;)+m.pathname.slice(0,m.pathname.lastIndexOf(&quot;/&quot;)+1)+d:m.pathname);var h=[];d.replace(/^(\.\.?(\/|$))+/,&quot;&quot;).replace(/\/(\.(\/|$))+/g,&quot;/&quot;).replace(/\/\.\.$/,&quot;/../&quot;).replace(/\/?[^\/]*/g,function(e){&quot;/..&quot;===e?h.pop():h.push(e)}),d=h.join(&quot;&quot;).replace(/^\//,&quot;/&quot;===d[0]?&quot;/&quot;:&quot;&quot;),p&amp;&amp;(u=m.port,l=m.hostname,s=m.host,i=m.password,o=m.username),a||(a=m.protocol)}&quot;file:&quot;==a&amp;&amp;(d=d.replace(/\\/g,&quot;/&quot;)),this.origin=s?a+(&quot;&quot;!==a||&quot;&quot;!==s?&quot;//&quot;:&quot;&quot;)+s:&quot;&quot;,this.href=a+(a&amp;&amp;s||&quot;file:&quot;==a?&quot;//&quot;:&quot;&quot;)+(&quot;&quot;!==o?o+(&quot;&quot;!==i?&quot;:&quot;+i:&quot;&quot;)+&quot;@&quot;:&quot;&quot;)+s+d+c+f,this.protocol=a,this.username=o,this.password=i,this.host=s,this.hostname=l,this.port=u,this.pathname=d,this.search=c,this.hash=f}e.URLPolyfill=t}(&quot;undefined&quot;!=typeof self?self:global),function(e){function t(e,t){if(!e.originalErr)for(var r=((e.message||e)+(e.stack?&quot;\n&quot;+e.stack:&quot;&quot;)).toString().split(&quot;\n&quot;),n=[],a=0;a&lt;r.length;a++)(&quot;undefined&quot;==typeof $__curScript||-1==r[a].indexOf($__curScript.src))&amp;&amp;n.push(r[a]);var o=&quot;(SystemJS) &quot;+(n?n.join(&quot;\n	&quot;):e.message.substr(11))+&quot;\n	&quot;+t;F||(o=o.replace(q?/file:\/\/\//g:/file:\/\//g,&quot;&quot;));var i=$?new Error(o,e.fileName,e.lineNumber):new Error(o);return F?i.stack=null:i.stack=o,i.originalErr=e.originalErr||e,i}function r(){}function n(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},D(this,&quot;global&quot;,{get:function(){return e}})}function a(){n.call(this),this.paths={},this._loader.paths={},Y.call(this)}function o(){}function i(e,t){a.prototype[e]=t(a.prototype[e]||function(){})}function s(e){Y=e(Y||function(){})}function l(e){return e.match(K)}function u(e){return&quot;.&quot;==e[0]&amp;&amp;(!e[1]||&quot;/&quot;==e[1]||&quot;.&quot;==e[1])||&quot;/&quot;==e[0]}function d(e){return!u(e)&amp;&amp;!l(e)}function c(e,t){if(&quot;.&quot;==e[0]){if(&quot;/&quot;==e[1]&amp;&amp;&quot;.&quot;!=e[2])return(t&amp;&amp;t.substr(0,t.lastIndexOf(&quot;/&quot;)+1)||J)+e.substr(2)}else if(&quot;/&quot;!=e[0]&amp;&amp;-1==e.indexOf(&quot;:&quot;))return(t&amp;&amp;t.substr(0,t.lastIndexOf(&quot;/&quot;)+1)||J)+e;return new X(e,t&amp;&amp;t.replace(/#/g,&quot;%05&quot;)||Q).href.replace(/%05/g,&quot;#&quot;)}function f(e,t){var r,n=&quot;&quot;,a=0,o=e.paths,i=e._loader.paths;for(var s in o)if(!o.hasOwnProperty||o.hasOwnProperty(s)){var l=o[s];if(l!==i[s]&amp;&amp;(l=o[s]=i[s]=c(o[s],u(o[s])?J:e.baseURL)),-1===s.indexOf(&quot;*&quot;)){if(t==s)return o[s];if(t.substr(0,s.length-1)==s.substr(0,s.length-1)&amp;&amp;(t.length&lt;s.length||t[s.length-1]==s[s.length-1])&amp;&amp;(&quot;/&quot;==o[s][o[s].length-1]||&quot;&quot;==o[s]))return o[s].substr(0,o[s].length-1)+(t.length&gt;s.length?(o[s]&amp;&amp;&quot;/&quot;||&quot;&quot;)+t.substr(s.length):&quot;&quot;)}else{var d=s.split(&quot;*&quot;);if(d.length&gt;2)throw new TypeError(&quot;Only one wildcard in a path is permitted&quot;);var f=d[0].length;f&gt;=a&amp;&amp;t.substr(0,d[0].length)==d[0]&amp;&amp;t.substr(t.length-d[1].length)==d[1]&amp;&amp;(a=f,n=s,r=t.substr(d[0].length,t.length-d[1].length-d[0].length))}}var m=o[n];return&quot;string&quot;==typeof r&amp;&amp;(m=m.replace(&quot;*&quot;,r)),m}function m(e){for(var t=[],r=[],n=0,a=e.length;a&gt;n;n++){var o=U.call(t,e[n]);-1===o?(t.push(e[n]),r.push([n])):r[o].push(n)}return{names:t,indices:r}}function p(t){var r={};if((&quot;object&quot;==typeof t||&quot;function&quot;==typeof t)&amp;&amp;t!==e)if(ee)for(var n in t)&quot;default&quot;!==n&amp;&amp;h(r,t,n);else g(r,t);return r[&quot;default&quot;]=t,D(r,&quot;__useDefault&quot;,{value:!0}),r}function h(e,t,r){try{var n;(n=Object.getOwnPropertyDescriptor(t,r))&amp;&amp;D(e,r,n)}catch(a){return e[r]=t[r],!1}}function g(e,t,r){var n=t&amp;&amp;t.hasOwnProperty;for(var a in t)(!n||t.hasOwnProperty(a))&amp;&amp;(r&amp;&amp;a in e||(e[a]=t[a]));return e}function v(e,t,r){var n=t&amp;&amp;t.hasOwnProperty;for(var a in t)if(!n||t.hasOwnProperty(a)){var o=t[a];a in e?o instanceof Array&amp;&amp;e[a]instanceof Array?e[a]=[].concat(r?o:e[a]).concat(r?e[a]:o):&quot;object&quot;==typeof o&amp;&amp;null!==o&amp;&amp;&quot;object&quot;==typeof e[a]?e[a]=g(g({},e[a]),o,r):r||(e[a]=o):e[a]=o}}function b(e,t,r,n,a){for(var o in t)if(-1!=U.call([&quot;main&quot;,&quot;format&quot;,&quot;defaultExtension&quot;,&quot;basePath&quot;],o))e[o]=t[o];else if(&quot;map&quot;==o)g(e.map=e.map||{},t.map);else if(&quot;meta&quot;==o)g(e.meta=e.meta||{},t.meta);else if(&quot;depCache&quot;==o)for(var i in t.depCache){var s;s=&quot;./&quot;==i.substr(0,2)?r+&quot;/&quot;+i.substr(2):P.call(n,i),n.depCache[s]=(n.depCache[s]||[]).concat(t.depCache[i])}else!a||-1!=U.call([&quot;browserConfig&quot;,&quot;nodeConfig&quot;,&quot;devConfig&quot;,&quot;productionConfig&quot;],o)||t.hasOwnProperty&amp;&amp;!t.hasOwnProperty(o)||w.call(n,&#39;&quot;&#39;+o+&#39;&quot; is not a valid package configuration option in package &#39;+r)}function y(e,t,r,n){var a;if(e.packages[t]){var o=e.packages[t];a=e.packages[t]={},b(a,n?r:o,t,e,n),b(a,n?o:r,t,e,!n)}else a=e.packages[t]=r;return&quot;object&quot;==typeof a.main&amp;&amp;(a.map=a.map||{},a.map[&quot;./@main&quot;]=a.main,a.main[&quot;default&quot;]=a.main[&quot;default&quot;]||&quot;./&quot;,a.main=&quot;@main&quot;),a}function w(e){this.warnings&amp;&amp;&quot;undefined&quot;!=typeof console&amp;&amp;console.warn}function x(e,t){for(var r=e.split(&quot;.&quot;);r.length;)t=t[r.shift()];return t}function S(e,t){var r,n=0;for(var a in e)if(t.substr(0,a.length)==a&amp;&amp;(t.length==a.length||&quot;/&quot;==t[a.length])){var o=a.split(&quot;/&quot;).length;if(n&gt;=o)continue;r=a,n=o}return r}function E(e){this._loader.baseURL!==this.baseURL&amp;&amp;(&quot;/&quot;!=this.baseURL[this.baseURL.length-1]&amp;&amp;(this.baseURL+=&quot;/&quot;),this._loader.baseURL=this.baseURL=new X(this.baseURL,Q).href)}function _(e,t){this.set(&quot;@system-env&quot;,re=this.newModule({browser:F,node:!!this._nodeRequire,production:!t&amp;&amp;e,dev:t||!e,build:t,&quot;default&quot;:!0}))}function j(e,t){if(!d(e))throw new Error(&quot;Node module &quot;+e+&quot; can&#39;t be loaded as it is not a package require.&quot;);if(!ne){var r=this._nodeRequire(&quot;module&quot;),n=t.substr(q?8:7);ne=new r(n),ne.paths=r._nodeModulePaths(n)}return ne.require(e)}function P(e,t){if(u(e))return c(e,t);if(l(e))return e;var r=S(this.map,e);if(r){if(e=this.map[r]+e.substr(r.length),u(e))return c(e);if(l(e))return e}if(this.has(e))return e;if(&quot;@node/&quot;==e.substr(0,6)){if(!this._nodeRequire)throw new TypeError(&quot;Error loading &quot;+e+&quot;. Can only load node core modules in Node.&quot;);return this.set(e,this.newModule(p(j.call(this,e.substr(6),this.baseURL)))),e}return E.call(this),f(this,e)||this.baseURL+e}function k(e,t,r){re.browser&amp;&amp;t.browserConfig&amp;&amp;r(t.browserConfig),re.node&amp;&amp;t.nodeConfig&amp;&amp;r(t.nodeConfig),re.dev&amp;&amp;t.devConfig&amp;&amp;r(t.devConfig),re.build&amp;&amp;t.buildConfig&amp;&amp;r(t.buildConfig),re.production&amp;&amp;t.productionConfig&amp;&amp;r(t.productionConfig)}function O(e){var t=e.match(ie);return t&amp;&amp;&quot;System.register&quot;==e.substr(t[0].length,15)}function M(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function R(t){if(&quot;string&quot;==typeof t)return x(t,e);if(!(t instanceof Array))throw new Error(&quot;Global exports must be a string or array.&quot;);for(var r={},n=!0,a=0;a&lt;t.length;a++){var o=x(t[a],e);n&amp;&amp;(r[&quot;default&quot;]=o,n=!1),r[t[a].split(&quot;.&quot;).pop()]=o}return r}function z(e){var t,r,n,n=&quot;~&quot;==e[0],a=e.lastIndexOf(&quot;|&quot;);return-1!=a?(t=e.substr(a+1),r=e.substr(n,a-n),n&amp;&amp;w.call(this,&#39;Condition negation form &quot;&#39;+e+&#39;&quot; is deprecated for &quot;&#39;+r+&quot;|~&quot;+t+&#39;&quot;&#39;),&quot;~&quot;==t[0]&amp;&amp;(n=!0,t=t.substr(1))):(t=&quot;default&quot;,r=e.substr(n),-1!=le.indexOf(r)&amp;&amp;(t=r,r=null)),{module:r||&quot;@system-env&quot;,prop:t,negate:n}}function I(e){return e.module+&quot;|&quot;+(e.negate?&quot;~&quot;:&quot;&quot;)+e.prop}function T(e,t,r){var n=this;return this.normalize(e.module,t).then(function(t){return n.load(t).then(function(a){var o=x(e.prop,n.get(t));if(r&amp;&amp;&quot;boolean&quot;!=typeof o)throw new TypeError(&quot;Condition &quot;+I(e)+&quot; did not resolve to a boolean.&quot;);return e.negate?!o:o})})}function C(e,t){var r=e.match(ue);if(!r)return Promise.resolve(e);var n=z.call(this,r[0].substr(2,r[0].length-3));return this.builder?this.normalize(n.module,t).then(function(t){return n.module=t,e.replace(ue,&quot;#{&quot;+I(n)+&quot;}&quot;)}):T.call(this,n,t,!1).then(function(r){if(&quot;string&quot;!=typeof r)throw new TypeError(&quot;The condition value for &quot;+e+&quot; doesn&#39;t resolve to a string.&quot;);if(-1!=r.indexOf(&quot;/&quot;))throw new TypeError(&quot;Unabled to interpolate conditional &quot;+e+(t?&quot; in &quot;+t:&quot;&quot;)+&quot;\n	The condition value &quot;+r+&#39; cannot contain a &quot;/&quot; separator.&#39;);return e.replace(ue,r)})}function L(e,t){var r=e.lastIndexOf(&quot;#?&quot;);if(-1==r)return Promise.resolve(e);var n=z.call(this,e.substr(r+2));return this.builder?this.normalize(n.module,t).then(function(t){return n.module=t,e.substr(0,r)+&quot;#?&quot;+I(n)}):T.call(this,n,t,!0).then(function(t){return t?e.substr(0,r):&quot;@empty&quot;})}var A=&quot;undefined&quot;==typeof window&amp;&amp;&quot;undefined&quot;!=typeof self&amp;&amp;&quot;undefined&quot;!=typeof importScripts,F=&quot;undefined&quot;!=typeof window&amp;&amp;&quot;undefined&quot;!=typeof document,q=&quot;undefined&quot;!=typeof process&amp;&amp;&quot;undefined&quot;!=typeof process.platform&amp;&amp;!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var D,U=Array.prototype.indexOf||function(e){for(var t=0,r=this.length;r&gt;t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},&quot;a&quot;,{})&amp;&amp;(D=Object.defineProperty)}catch(e){D=function(e,t,r){try{e[t]=r.value||r.get.call(e)}catch(n){}}}}();var J,$=&quot;_&quot;==new Error(0,&quot;_&quot;).fileName;if(&quot;undefined&quot;!=typeof document&amp;&amp;document.getElementsByTagName){if(J=document.baseURI,!J){var N=document.getElementsByTagName(&quot;base&quot;);J=N[0]&amp;&amp;N[0].href||window.location.href}}else&quot;undefined&quot;!=typeof location&amp;&amp;(J=e.location.href);if(J)J=J.split(&quot;#&quot;)[0].split(&quot;?&quot;)[0],J=J.substr(0,J.lastIndexOf(&quot;/&quot;)+1);else{if(&quot;undefined&quot;==typeof process||!process.cwd)throw new TypeError(&quot;No environment baseURI&quot;);J=&quot;file://&quot;+(q?&quot;/&quot;:&quot;&quot;)+process.cwd()+&quot;/&quot;,q&amp;&amp;(J=J.replace(/\\/g,&quot;/&quot;))}try{var B=&quot;test:&quot;==new e.URL(&quot;test:///&quot;).protocol}catch(H){}var X=B?e.URL:e.URLPolyfill;D(r.prototype,&quot;toString&quot;,{value:function(){return&quot;Module&quot;}}),function(){function e(e){return{status:&quot;loading&quot;,name:e||&quot;&lt;Anonymous&quot;+ ++y+&quot;&gt;&quot;,linkSets:[],dependencies:[],metadata:{}}}function a(e,t,r){return new Promise(u({step:r.address?&quot;fetch&quot;:&quot;locate&quot;,loader:e,moduleName:t,moduleMetadata:r&amp;&amp;r.metadata||{},moduleSource:r.source,moduleAddress:r.address}))}function o(t,r,n,a){return new Promise(function(e,o){e(t.loaderObj.normalize(r,n,a))}).then(function(r){var n;if(t.modules[r])return n=e(r),n.status=&quot;linked&quot;,n.module=t.modules[r],n;for(var a=0,o=t.loads.length;o&gt;a;a++)if(n=t.loads[a],n.name==r)return n;return n=e(r),t.loads.push(n),i(t,n),n})}function i(e,t){s(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function s(e,t,r){l(e,t,r.then(function(r){return&quot;loading&quot;==t.status?(t.address=r,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:r})):void 0}))}function l(e,t,r){r.then(function(r){return&quot;loading&quot;==t.status?(t.address=t.address||t.name,Promise.resolve(e.loaderObj.translate({name:t.name,metadata:t.metadata,address:t.address,source:r})).then(function(r){return t.source=r,e.loaderObj.instantiate({name:t.name,metadata:t.metadata,address:t.address,source:r})}).then(function(e){if(void 0===e)throw new TypeError(&quot;Declarative modules unsupported in the polyfill.&quot;);if(&quot;object&quot;!=typeof e)throw new TypeError(&quot;Invalid instantiate return value&quot;);t.depsList=e.deps||[],t.execute=e.execute}).then(function(){t.dependencies=[];for(var r=t.depsList,n=[],a=0,i=r.length;i&gt;a;a++)(function(r,a){n.push(o(e,r,t.name,t.address).then(function(e){if(t.dependencies[a]={key:r,value:e.name},&quot;linked&quot;!=e.status)for(var n=t.linkSets.concat([]),o=0,i=n.length;i&gt;o;o++)c(n[o],e)}))})(r[a],a);return Promise.all(n)}).then(function(){t.status=&quot;loaded&quot;;for(var e=t.linkSets.concat([]),r=0,n=e.length;n&gt;r;r++)m(e[r],t)})):void 0})[&quot;catch&quot;](function(e){t.status=&quot;failed&quot;,t.exception=e;for(var r=t.linkSets.concat([]),n=0,a=r.length;a&gt;n;n++)p(r[n],t,e)})}function u(t){return function(r,n){var a=t.loader,o=t.moduleName,u=t.step;if(a.modules[o])throw new TypeError(&#39;&quot;&#39;+o+&#39;&quot; already exists in the module table&#39;);for(var c,f=0,m=a.loads.length;m&gt;f;f++)if(a.loads[f].name==o&amp;&amp;(c=a.loads[f],&quot;translate&quot;!=u||c.source||(c.address=t.moduleAddress,l(a,c,Promise.resolve(t.moduleSource))),c.linkSets.length&amp;&amp;c.linkSets[0].loads[0].name==c.name))return c.linkSets[0].done.then(function(){r(c)});var p=c||e(o);p.metadata=t.moduleMetadata;var h=d(a,p);a.loads.push(p),r(h.done),&quot;locate&quot;==u?i(a,p):&quot;fetch&quot;==u?s(a,p,Promise.resolve(t.moduleAddress)):(p.address=t.moduleAddress,l(a,p,Promise.resolve(t.moduleSource)))}}function d(e,t){var r={loader:e,loads:[],startingLoad:t,loadingCount:0};return r.done=new Promise(function(e,t){r.resolve=e,r.reject=t}),c(r,t),r}function c(e,t){if(&quot;failed&quot;!=t.status){for(var r=0,n=e.loads.length;n&gt;r;r++)if(e.loads[r]==t)return;e.loads.push(t),t.linkSets.push(e),&quot;loaded&quot;!=t.status&amp;&amp;e.loadingCount++;for(var a=e.loader,r=0,n=t.dependencies.length;n&gt;r;r++)if(t.dependencies[r]){var o=t.dependencies[r].value;if(!a.modules[o])for(var i=0,s=a.loads.length;s&gt;i;i++)if(a.loads[i].name==o){c(e,a.loads[i]);break}}}}function f(e){var t=!1;try{b(e,function(r,n){p(e,r,n),t=!0})}catch(r){p(e,null,r),t=!0}return t}function m(e,t){if(e.loadingCount--,!(e.loadingCount&gt;0)){var r=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var n=[].concat(e.loads),a=0,o=n.length;o&gt;a;a++){var t=n[a];t.module={name:t.name,module:w({}),evaluated:!0},t.status=&quot;linked&quot;,h(e.loader,t)}return e.resolve(r)}var i=f(e);i||e.resolve(r)}}function p(e,r,n){var a=e.loader;e:if(r)if(e.loads[0].name==r.name)n=t(n,&quot;Error loading &quot;+r.name);else{for(var o=0;o&lt;e.loads.length;o++)for(var i=e.loads[o],s=0;s&lt;i.dependencies.length;s++){var l=i.dependencies[s];if(l.value==r.name){n=t(n,&quot;Error loading &quot;+r.name+&#39; as &quot;&#39;+l.key+&#39;&quot; from &#39;+i.name);break e}}n=t(n,&quot;Error loading &quot;+r.name+&quot; from &quot;+e.loads[0].name)}else n=t(n,&quot;Error linking &quot;+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d&gt;o;o++){var r=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==U.call(a.loaderObj.failed,r)&amp;&amp;a.loaderObj.failed.push(r);var c=U.call(r.linkSets,e);if(r.linkSets.splice(c,1),0==r.linkSets.length){var f=U.call(e.loader.loads,r);-1!=f&amp;&amp;e.loader.loads.splice(f,1)}}e.reject(n)}function h(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var r={};t.dependencies.forEach(function(e){r[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:r,address:t.address,metadata:t.metadata,source:t.source}}t.name&amp;&amp;(e.modules[t.name]=t.module);var n=U.call(e.loads,t);-1!=n&amp;&amp;e.loads.splice(n,1);for(var a=0,o=t.linkSets.length;o&gt;a;a++)n=U.call(t.linkSets[a].loads,t),-1!=n&amp;&amp;t.linkSets[a].loads.splice(n,1);t.linkSets.splice(0,t.linkSets.length)}function g(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&amp;&amp;a instanceof r?a:void n(t,new TypeError(&quot;Execution must define a Module instance&quot;))}function v(e,t,r){var n=e._loader.importPromises;return n[t]=r.then(function(e){return n[t]=void 0,e},function(e){throw n[t]=void 0,e})}function b(e,t){var r=e.loader;if(e.loads.length)for(var n=e.loads.concat([]),a=0;a&lt;n.length;a++){var o=n[a],i=g(e,o,t);if(!i)return;o.module={name:o.name,module:i},o.status=&quot;linked&quot;,h(r,o)}}var y=0;n.prototype={constructor:n,define:function(e,t,r){if(this._loader.importPromises[e])throw new TypeError(&quot;Module is already loading.&quot;);return v(this,e,new Promise(u({step:&quot;translate&quot;,loader:this._loader,moduleName:e,moduleMetadata:r&amp;&amp;r.metadata||{},moduleSource:t,moduleAddress:r&amp;&amp;r.address})))},&quot;delete&quot;:function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?this._loader.modules[e].module:void 0},has:function(e){return!!this._loader.modules[e]},&quot;import&quot;:function(e,t,r){&quot;object&quot;==typeof t&amp;&amp;(t=t.name);var n=this;return Promise.resolve(n.normalize(e,t)).then(function(e){var t=n._loader;return t.modules[e]?t.modules[e].module:t.importPromises[e]||v(n,e,a(t,e,{}).then(function(r){return delete t.importPromises[e],r.module.module}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||v(this,e,new Promise(u({step:&quot;locate&quot;,loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(t,r){var n=e();n.address=r&amp;&amp;r.address;var a=d(this._loader,n),o=Promise.resolve(t),i=this._loader,s=a.done.then(function(){return n.module.module});return l(i,n,o),s},newModule:function(e){if(&quot;object&quot;!=typeof e)throw new TypeError(&quot;Expected object&quot;);var t=new r,n=[];if(Object.getOwnPropertyNames&amp;&amp;null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o&lt;n.length;o++)(function(r){D(t,r,{configurable:!1,enumerable:!0,get:function(){return e[r]},set:function(){throw new Error(&quot;Module exports cannot be changed externally.&quot;)}})})(n[o]);return Object.freeze&amp;&amp;Object.freeze(t),t},set:function(e,t){if(!(t instanceof r))throw new TypeError(&quot;Loader.set(&quot;+e+&quot;, module) must be a module&quot;);this._loader.modules[e]={module:t}},normalize:function(e,t,r){},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var w=n.prototype.newModule}();var G,Z;if(&quot;undefined&quot;!=typeof XMLHttpRequest)Z=function(e,t,r,n){function a(){r(i.responseText)}function o(){n(new Error(&quot;XHR error&quot;+(i.status?&quot; (&quot;+i.status+(i.statusText?&quot; &quot;+i.statusText:&quot;&quot;)+&quot;)&quot;:&quot;&quot;)+&quot; loading &quot;+e))}var i=new XMLHttpRequest,s=!0,l=!1;if(!(&quot;withCredentials&quot;in i)){var u=/^(\w+:)?\/\/([^\/]+)/.exec(e);u&amp;&amp;(s=u[2]===window.location.host,u[1]&amp;&amp;(s&amp;=u[1]===window.location.protocol))}s||&quot;undefined&quot;==typeof XDomainRequest||(i=new XDomainRequest,i.onload=a,i.onerror=o,i.ontimeout=o,i.onprogress=function(){},i.timeout=0,l=!0),i.onreadystatechange=function(){4===i.readyState&amp;&amp;(0==i.status?i.responseText?a():(i.addEventListener(&quot;error&quot;,o),i.addEventListener(&quot;load&quot;,a)):200===i.status?a():o())},i.open(&quot;GET&quot;,e,!0),i.setRequestHeader&amp;&amp;(i.setRequestHeader(&quot;Accept&quot;,&quot;application/x-es-module, */*&quot;),t&amp;&amp;(&quot;string&quot;==typeof t&amp;&amp;i.setRequestHeader(&quot;Authorization&quot;,t),i.withCredentials=!0)),l?setTimeout(function(){i.send()},0):i.send(null)};else if(&quot;undefined&quot;!=typeof require&amp;&amp;&quot;undefined&quot;!=typeof process){var W;Z=function(e,t,r,n){if(&quot;file:///&quot;!=e.substr(0,8))throw new Error(&#39;Unable to fetch &quot;&#39;+e+&#39;&quot;. Only file URLs of the form file:/// allowed running in Node.&#39;);return W=W||require(&quot;fs&quot;),e=q?e.replace(/\//g,&quot;\\&quot;).substr(8):e.substr(7),W.readFile(e,function(e,t){if(e)return n(e);var a=t+&quot;&quot;;&quot;\ufeff&quot;===a[0]&amp;&amp;(a=a.substr(1)),r(a)})}}else{if(&quot;undefined&quot;==typeof self||&quot;undefined&quot;==typeof self.fetch)throw new TypeError(&quot;No environment fetch API available.&quot;);Z=function(e,t,r,n){var a={headers:{Accept:&quot;application/x-es-module, */*&quot;}};t&amp;&amp;(&quot;string&quot;==typeof t&amp;&amp;(a.headers.Authorization=t),a.credentials=&quot;include&quot;),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error(&quot;Fetch error: &quot;+e.status+&quot; &quot;+e.statusText)}).then(r,n)}}var V=function(){function t(t){var n=this;return Promise.resolve(e[&quot;typescript&quot;==n.transpiler?&quot;ts&quot;:n.transpiler]||(n.pluginLoader||n)[&quot;import&quot;](n.transpiler)).then(function(e){e.__useDefault&amp;&amp;(e=e[&quot;default&quot;]);var a;return a=e.Compiler?r:e.createLanguageService?i:o,&quot;(function(__moduleName){&quot;+a.call(n,t,e)+&#39;\n})(&quot;&#39;+t.name+&#39;&quot;);\n//# sourceURL=&#39;+t.address+&quot;!transpiled&quot;})}function r(e,t){var r=this.traceurOptions||{};r.modules=&quot;instantiate&quot;,r.script=!1,void 0===r.sourceMaps&amp;&amp;(r.sourceMaps=&quot;inline&quot;),r.filename=e.address,r.inputSourceMap=e.metadata.sourceMap,r.moduleName=!1;var n=new t.Compiler(r);return a(e.source,n,r.filename)}function a(e,t,r){try{return t.compile(e,r)}catch(n){if(n.length)throw n[0];throw n}}function o(e,t){var r=this.babelOptions||{};return r.modules=&quot;system&quot;,void 0===r.sourceMap&amp;&amp;(r.sourceMap=&quot;inline&quot;),r.inputSourceMap=e.metadata.sourceMap,r.filename=e.address,r.code=!0,r.ast=!1,t.transform(e.source,r).code}function i(e,t){var r=this.typescriptOptions||{};return r.target=r.target||t.ScriptTarget.ES5,void 0===r.sourceMap&amp;&amp;(r.sourceMap=!0),r.sourceMap&amp;&amp;r.inlineSourceMap!==!1&amp;&amp;(r.inlineSourceMap=!0),r.module=t.ModuleKind.System,t.transpile(e.source,r,e.address)}return n.prototype.transpiler=&quot;traceur&quot;,t}();o.prototype=n.prototype,a.prototype=new o,a.prototype.constructor=a;var Y,K=/^[^\/]+:\/\//,Q=new X(J),ee=!0;try{Object.getOwnPropertyDescriptor({a:0},&quot;a&quot;)}catch(H){ee=!1}var te;!function(){function r(e){return l?c+new Buffer(e).toString(&quot;base64&quot;):&quot;undefined&quot;!=typeof btoa?c+btoa(unescape(encodeURIComponent(e))):&quot;&quot;}function n(e,t){var n=e.source.lastIndexOf(&quot;\n&quot;);&quot;global&quot;==e.metadata.format&amp;&amp;(t=!1);var a=e.metadata.sourceMap;if(a){if(&quot;object&quot;!=typeof a)throw new TypeError(&quot;load.metadata.sourceMap must be set to an object.&quot;);a=JSON.stringify(a)}return(t?&quot;(function(System, SystemJS) {&quot;:&quot;&quot;)+e.source+(t?&quot;\n})(System, System);&quot;:&quot;&quot;)+(&quot;\n//# sourceURL=&quot;!=e.source.substr(n,15)?&quot;\n//# sourceURL=&quot;+e.address+(a?&quot;!transpiled&quot;:&quot;&quot;):&quot;&quot;)+(a&amp;&amp;r(a)||&quot;&quot;)}function a(t,r){d=r,0==p++&amp;&amp;(f=e.System),e.System=e.SystemJS=t}function o(){0==--p&amp;&amp;(e.System=e.SystemJS=f),d=void 0}function s(e){b||(b=document.head||document.body||document.documentElement);var r=document.createElement(&quot;script&quot;);r.text=n(e,!1);var i,s=window.onerror;if(window.onerror=function(r){i=t(r,&quot;Evaluating &quot;+e.address),s&amp;&amp;s.apply(this,arguments)},a(this,e),e.metadata.integrity&amp;&amp;r.setAttribute(&quot;integrity&quot;,e.metadata.integrity),e.metadata.nonce&amp;&amp;r.setAttribute(&quot;nonce&quot;,e.metadata.nonce),b.appendChild(r),b.removeChild(r),o(),window.onerror=s,i)throw i}var l=&quot;undefined&quot;!=typeof Buffer;try{&quot;YQ==&quot;!=new Buffer(&quot;a&quot;).toString(&quot;base64&quot;)&amp;&amp;(l=!1)}catch(u){l=!1}var d,c=&quot;\n//# sourceMappingURL=data:application/json;base64,&quot;;i(&quot;pushRegister_&quot;,function(){return function(e){return d?(this.reduceRegister_(d,e),!0):!1}});var f,m,p=0,h=&quot;undefined&quot;!=typeof process&amp;&amp;process.versions&amp;&amp;process.versions[&quot;node-webkit&quot;];te=function(e){if(e.source){if((e.metadata.integrity||e.metadata.nonce)&amp;&amp;g)return s.call(this,e);try{a(this,e),d=e,this._nodeRequire&amp;&amp;!h?(m=m||this._nodeRequire(&quot;vm&quot;),m.runInThisContext(n(e,!0),{filename:e.address+(e.metadata.sourceMap?&quot;!transpiled&quot;:&quot;&quot;)})):(0,eval)(n(e,!0)),o()}catch(r){throw o(),t(r,&quot;Evaluating &quot;+e.address)}}};var g=!1;if(F&amp;&amp;&quot;undefined&quot;!=typeof document&amp;&amp;document.getElementsByTagName){var v=document.getElementsByTagName(&quot;script&quot;);$__curScript=v[v.length-1],window.chrome&amp;&amp;window.chrome.extension||navigator.userAgent.match(/^Node\.js/)||(g=!0)}var b}();var re;s(function(e){return function(){e.call(this),this.baseURL=J,this.map={},this.warnings=!1,this.defaultJSExtensions=!1,this.pluginFirst=!1,this.loaderErrorStack=!1,this.set(&quot;@empty&quot;,this.newModule({})),_.call(this,!1,!1)}}),&quot;undefined&quot;==typeof require||&quot;undefined&quot;==typeof process||process.browser||(a.prototype._nodeRequire=require);var ne;i(&quot;normalize&quot;,function(e){return function(e,t,r){var n=P.call(this,e,t);return!this.defaultJSExtensions||r||&quot;.js&quot;==n.substr(n.length-3,3)||d(n)||(n+=&quot;.js&quot;),n}});var ae=&quot;undefined&quot;!=typeof XMLHttpRequest;i(&quot;locate&quot;,function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return ae?e.replace(/#/g,&quot;%23&quot;):e})}}),i(&quot;fetch&quot;,function(){return function(e){return new Promise(function(t,r){Z(e.address,e.metadata.authorization,t,r)})}}),i(&quot;import&quot;,function(e){return function(t,r,n){return r&amp;&amp;r.name&amp;&amp;w.call(this,&quot;SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing &quot;+t+&quot; from &quot;+r.name),e.call(this,t,r,n).then(function(e){return e.__useDefault?e[&quot;default&quot;]:e})}}),i(&quot;translate&quot;,function(e){return function(t){return&quot;detect&quot;==t.metadata.format&amp;&amp;(t.metadata.format=void 0),e.apply(this,arguments)}}),i(&quot;instantiate&quot;,function(e){return function(e){if(&quot;json&quot;==e.metadata.format&amp;&amp;!this.builder){var t=e.metadata.entry=M();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error(&quot;Invalid JSON file &quot;+e.name)}}}}}),a.prototype.getConfig=function(e){var t={},r=this;for(var n in r)r.hasOwnProperty&amp;&amp;!r.hasOwnProperty(n)||n in a.prototype&amp;&amp;&quot;transpiler&quot;!=n||-1==U.call([&quot;_loader&quot;,&quot;amdDefine&quot;,&quot;amdRequire&quot;,&quot;defined&quot;,&quot;failed&quot;,&quot;version&quot;],n)&amp;&amp;(t[n]=r[n]);return t.production=re.production,t};var oe;a.prototype.config=function(e,t){function r(e){for(var t in e)if(e.hasOwnProperty(t))return!0}var n=this;if(&quot;loaderErrorStack&quot;in e&amp;&amp;(oe=$__curScript,e.loaderErrorStack?$__curScript=void 0:$__curScript=oe),&quot;warnings&quot;in e&amp;&amp;(n.warnings=e.warnings),e.transpilerRuntime===!1&amp;&amp;(n._loader.loadedTranspilerRuntime=!0),(&quot;production&quot;in e||&quot;build&quot;in e)&amp;&amp;_.call(n,!!e.production,!!(e.build||re&amp;&amp;re.build)),!t){var a;if(k(n,e,function(e){a=a||e.baseURL}),a=a||e.baseURL){if(r(n.packages)||r(n.meta)||r(n.depCache)||r(n.bundles)||r(n.packageConfigPaths))throw new TypeError(&quot;Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.&quot;);this.baseURL=a,E.call(this)}if(e.paths&amp;&amp;g(n.paths,e.paths),k(n,e,function(e){e.paths&amp;&amp;g(n.paths,e.paths)}),this.warnings)for(var o in n.paths)-1!=o.indexOf(&quot;*&quot;)&amp;&amp;w.call(n,&#39;Paths configuration &quot;&#39;+o+&#39;&quot; -&gt; &quot;&#39;+n.paths[o]+&#39;&quot; uses wildcards which are being deprecated for simpler trailing &quot;/&quot; folder paths.&#39;)}if(e.defaultJSExtensions&amp;&amp;(n.defaultJSExtensions=e.defaultJSExtensions,w.call(n,&quot;The defaultJSExtensions configuration option is deprecated, use packages configuration instead.&quot;)),e.pluginFirst&amp;&amp;(n.pluginFirst=e.pluginFirst),e.map){var i=&quot;&quot;;for(var o in e.map){var s=e.map[o];if(&quot;string&quot;!=typeof s){i+=(i.length?&quot;, &quot;:&quot;&quot;)+&#39;&quot;&#39;+o+&#39;&quot;&#39;;var l=n.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=o.substr(o.length-3,3),u=n.decanonicalize(o);l&amp;&amp;&quot;.js&quot;==u.substr(u.length-3,3)&amp;&amp;(u=u.substr(0,u.length-3));var c=&quot;&quot;;for(var f in n.packages)u.substr(0,f.length)==f&amp;&amp;(!u[f.length]||&quot;/&quot;==u[f.length])&amp;&amp;c.split(&quot;/&quot;).length&lt;f.split(&quot;/&quot;).length&amp;&amp;(c=f);c&amp;&amp;n.packages[c].main&amp;&amp;(u=u.substr(0,u.length-n.packages[c].main.length-1));var f=n.packages[u]=n.packages[u]||{};f.map=s}else n.map[o]=s}i&amp;&amp;w.call(n,&quot;The map configuration for &quot;+i+&#39; uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { &quot;&#39;+o+&#39;&quot;: { map: {...} } } }).&#39;)}if(e.packageConfigPaths){for(var m=[],p=0;p&lt;e.packageConfigPaths.length;p++){var h=e.packageConfigPaths[p],v=Math.max(h.lastIndexOf(&quot;*&quot;)+1,h.lastIndexOf(&quot;/&quot;)),b=P.call(n,h.substr(0,v));m[p]=b+h.substr(v)}n.packageConfigPaths=m}if(e.bundles)for(var o in e.bundles){for(var x=[],p=0;p&lt;e.bundles[o].length;p++){var l=n.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=e.bundles[o][p].substr(e.bundles[o][p].length-3,3),S=n.decanonicalize(e.bundles[o][p]);l&amp;&amp;&quot;.js&quot;==S.substr(S.length-3,3)&amp;&amp;(S=S.substr(0,S.length-3)),x.push(S)}n.bundles[o]=x}if(e.packages)for(var o in e.packages){if(o.match(/^([^\/]+:)?\/\/$/))throw new TypeError(&#39;&quot;&#39;+o+&#39;&quot; is not a valid package name.&#39;);var u=P.call(n,o);&quot;/&quot;==u[u.length-1]&amp;&amp;(u=u.substr(0,u.length-1)),y(n,u,e.packages[o],!1)}for(var j in e){var s=e[j];if(-1==U.call([&quot;baseURL&quot;,&quot;map&quot;,&quot;packages&quot;,&quot;bundles&quot;,&quot;paths&quot;,&quot;warnings&quot;,&quot;packageConfigPaths&quot;,&quot;loaderErrorStack&quot;,&quot;browserConfig&quot;,&quot;nodeConfig&quot;,&quot;devConfig&quot;,&quot;buildConfig&quot;,&quot;productionConfig&quot;],j))if(&quot;object&quot;!=typeof s||s instanceof Array)n[j]=s;else{n[j]=n[j]||{};for(var o in s)if(&quot;meta&quot;==j&amp;&amp;&quot;*&quot;==o[0])g(n[j][o]=n[j][o]||{},s[o]);else if(&quot;meta&quot;==j){var O=P.call(n,o);n.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=O.substr(O.length-3,3)&amp;&amp;!d(O)&amp;&amp;(O+=&quot;.js&quot;),g(n[j][O]=n[j][O]||{},s[o])}else if(&quot;depCache&quot;==j){var l=n.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=o.substr(o.length-3,3),u=n.decanonicalize(o);l&amp;&amp;&quot;.js&quot;==u.substr(u.length-3,3)&amp;&amp;(u=u.substr(0,u.length-3)),n[j][u]=[].concat(s[o])}else n[j][o]=s[o]}}k(n,e,function(e){n.config(e,!0)})},function(){function e(e,t){var r,n,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&amp;&amp;&quot;/&quot;!==t[o.length]||(n=o.split(&quot;/&quot;).length,n&gt;a&amp;&amp;(r=o,a=n));return r}function t(e,t,r,n,a){if(!n||&quot;/&quot;==n[n.length-1]||a||t.defaultExtension===!1)return n;var o=!1;if(t.meta&amp;&amp;p(t.meta,n,function(e,t,r){return 0==r||e.lastIndexOf(&quot;*&quot;)!=e.length-1?o=!0:void 0}),!o&amp;&amp;e.meta&amp;&amp;p(e.meta,r+&quot;/&quot;+n,function(e,t,r){return 0==r||e.lastIndexOf(&quot;*&quot;)!=e.length-1?o=!0:void 0}),o)return n;var i=&quot;.&quot;+(t.defaultExtension||&quot;js&quot;);return n.substr(n.length-i.length)!=i?n+i:n}function r(e,r,n,a,i){if(!a){if(!r.main)return n+(e.defaultJSExtensions?&quot;.js&quot;:&quot;&quot;);a=&quot;./&quot;==r.main.substr(0,2)?r.main.substr(2):r.main}if(r.map){var s=&quot;./&quot;+a,l=S(r.map,s);if(l||(s=&quot;./&quot;+t(e,r,n,a,i),s!=&quot;./&quot;+a&amp;&amp;(l=S(r.map,s))),l){var u=o(e,r,n,l,s,i);if(u)return u}}return n+&quot;/&quot;+t(e,r,n,a,i)}function n(e,t,r,n){if(&quot;.&quot;==e)throw new Error(&quot;Package &quot;+r+&#39; has a map entry for &quot;.&quot; which is not permitted.&#39;);return t.substr(0,e.length)==e&amp;&amp;n.length&gt;e.length?!1:!0}function o(e,r,a,o,i,s){&quot;/&quot;==i[i.length-1]&amp;&amp;(i=i.substr(0,i.length-1));var l=r.map[o];if(&quot;object&quot;==typeof l)throw new Error(&quot;Synchronous conditional normalization not supported sync normalizing &quot;+o+&quot; in &quot;+a);if(n(o,l,a,i)&amp;&amp;&quot;string&quot;==typeof l){if(&quot;.&quot;==l)l=a;else if(&quot;./&quot;==l.substr(0,2))return a+&quot;/&quot;+t(e,r,a,l.substr(2)+i.substr(o.length),s);return e.normalizeSync(l+i.substr(o.length),a+&quot;/&quot;)}}function l(e,r,n,a,o){if(!a){if(!r.main)return Promise.resolve(n+(e.defaultJSExtensions?&quot;.js&quot;:&quot;&quot;));a=&quot;./&quot;==r.main.substr(0,2)?r.main.substr(2):r.main}var i,s;return r.map&amp;&amp;(i=&quot;./&quot;+a,s=S(r.map,i),s||(i=&quot;./&quot;+t(e,r,n,a,o),i!=&quot;./&quot;+a&amp;&amp;(s=S(r.map,i)))),(s?d(e,r,n,s,i,o):Promise.resolve()).then(function(i){return i?Promise.resolve(i):Promise.resolve(n+&quot;/&quot;+t(e,r,n,a,o))})}function u(e,r,n,a,o,i,s){if(&quot;.&quot;==o)o=n;else if(&quot;./&quot;==o.substr(0,2))return Promise.resolve(n+&quot;/&quot;+t(e,r,n,o.substr(2)+i.substr(a.length),s)).then(function(t){return C.call(e,t,n+&quot;/&quot;)});return e.normalize(o+i.substr(a.length),n+&quot;/&quot;)}function d(e,t,r,a,o,i){&quot;/&quot;==o[o.length-1]&amp;&amp;(o=o.substr(0,o.length-1));var s=t.map[a];if(&quot;string&quot;==typeof s)return n(a,s,r,o)?u(e,t,r,a,s,o,i):Promise.resolve();if(e.builder)return Promise.resolve(r+&quot;/#:&quot;+o);var l=[],d=[];for(var c in s){var f=z(c);d.push({condition:f,map:s[c]}),l.push(e[&quot;import&quot;](f.module,r))}return Promise.all(l).then(function(e){for(var t=0;t&lt;d.length;t++){var r=d[t].condition,n=x(r.prop,e[t]);if(!r.negate&amp;&amp;n||r.negate&amp;&amp;!n)return d[t].map}}).then(function(s){if(s){if(!n(a,s,r,o))return;return u(e,t,r,a,s,o,i)}})}function c(e){var t=e.lastIndexOf(&quot;*&quot;),r=Math.max(t+1,e.lastIndexOf(&quot;/&quot;));return{length:r,regEx:new RegExp(&quot;^(&quot;+e.substr(0,r).replace(/[.+?^${}()|[\]\\]/g,&quot;\\$&amp;&quot;).replace(/\*/g,&quot;[^\\/]+&quot;)+&quot;)(\\/|$)&quot;),wildcard:-1!=t}}function f(e,t){for(var r,n,a=!1,o=0;o&lt;e.packageConfigPaths.length;o++){var i=e.packageConfigPaths[o],s=h[i]||(h[i]=c(i));if(!(t.length&lt;s.length)){var l=t.match(s.regEx);!l||r&amp;&amp;(a&amp;&amp;s.wildcard||!(r.length&lt;l[1].length))||(r=l[1],a=!s.wildcard,n=r+i.substr(s.length))}}return r?{packageName:r,configPath:n}:void 0}function m(e,t,r){var n=e.pluginLoader||e;return(n.meta[r]=n.meta[r]||{}).format=&quot;json&quot;,n.meta[r].loader=null,n.load(r).then(function(){var a=n.get(r)[&quot;default&quot;];return a.systemjs&amp;&amp;(a=a.systemjs),a.modules&amp;&amp;(a.meta=a.modules,w.call(e,&quot;Package config file &quot;+r+&#39; is configured with &quot;modules&quot;, which is deprecated as it has been renamed to &quot;meta&quot;.&#39;)),y(e,t,a,!0)})}function p(e,t,r){var n;for(var a in e){var o=&quot;./&quot;==a.substr(0,2)?&quot;./&quot;:&quot;&quot;;if(o&amp;&amp;(a=a.substr(2)),n=a.indexOf(&quot;*&quot;),-1!==n&amp;&amp;a.substr(0,n)==t.substr(0,n)&amp;&amp;a.substr(n+1)==t.substr(t.length-a.length+n+1)&amp;&amp;r(a,e[o+a],a.split(&quot;/&quot;).length))return}var i=e[t]&amp;&amp;e.hasOwnProperty&amp;&amp;e.hasOwnProperty(t)?e[t]:e[&quot;./&quot;+t];i&amp;&amp;r(i,i,0)}s(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),a.prototype.normalizeSync=a.prototype.decanonicalize=a.prototype.normalize,i(&quot;decanonicalize&quot;,function(t){return function(r,n){if(this.builder)return t.call(this,r,n,!0);var a=t.call(this,r,n,!1);if(!this.defaultJSExtensions)return a;var o=e(this,a),i=this.packages[o],s=i&amp;&amp;i.defaultExtension;return void 0==s&amp;&amp;i&amp;&amp;i.meta&amp;&amp;p(i.meta,a.substr(o),function(e,t,r){return 0==r||e.lastIndexOf(&quot;*&quot;)!=e.length-1?(s=!1,!0):void 0}),(s===!1||s&amp;&amp;&quot;.js&quot;!=s)&amp;&amp;&quot;.js&quot;!=r.substr(r.length-3,3)&amp;&amp;&quot;.js&quot;==a.substr(a.length-3,3)&amp;&amp;(a=a.substr(0,a.length-3)),a}}),i(&quot;normalizeSync&quot;,function(t){return function(n,a,i){var s=this;if(i=i===!0,a)var l=e(s,a)||s.defaultJSExtensions&amp;&amp;&quot;.js&quot;==a.substr(a.length-3,3)&amp;&amp;e(s,a.substr(0,a.length-3));</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">var u=l&amp;&amp;s.packages[l];if(u&amp;&amp;&quot;.&quot;!=n[0]){var d=u.map,c=d&amp;&amp;S(d,n);if(c&amp;&amp;&quot;string&quot;==typeof d[c]){var m=o(s,u,l,c,n,i);if(m)return m}}var p=s.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=n.substr(n.length-3,3),h=t.call(s,n,a,!1);p&amp;&amp;&quot;.js&quot;!=h.substr(h.length-3,3)&amp;&amp;(p=!1),p&amp;&amp;(h=h.substr(0,h.length-3));var g=f(s,h),v=g&amp;&amp;g.packageName||e(s,h);if(!v)return h+(p?&quot;.js&quot;:&quot;&quot;);var b=h.substr(v.length+1);return r(s,s.packages[v]||{},v,b,i)}}),i(&quot;normalize&quot;,function(t){return function(r,n,a){var o=this;return a=a===!0,Promise.resolve().then(function(){if(n)var t=e(o,n)||o.defaultJSExtensions&amp;&amp;&quot;.js&quot;==n.substr(n.length-3,3)&amp;&amp;e(o,n.substr(0,n.length-3));var i=t&amp;&amp;o.packages[t];if(i&amp;&amp;&quot;./&quot;!=r.substr(0,2)){var s=i.map,l=s&amp;&amp;S(s,r);if(l)return d(o,i,t,l,r,a)}return Promise.resolve()}).then(function(i){if(i)return i;var s=o.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=r.substr(r.length-3,3),u=t.call(o,r,n,!1);s&amp;&amp;&quot;.js&quot;!=u.substr(u.length-3,3)&amp;&amp;(s=!1),s&amp;&amp;(u=u.substr(0,u.length-3));var d=f(o,u),c=d&amp;&amp;d.packageName||e(o,u);if(!c)return Promise.resolve(u+(s?&quot;.js&quot;:&quot;&quot;));var p=o.packages[c],h=p&amp;&amp;(p.configured||!d);return(h?Promise.resolve(p):m(o,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return l(o,e,c,t,a)})})}});var h={};i(&quot;locate&quot;,function(t){return function(r){var n=this;return Promise.resolve(t.call(this,r)).then(function(t){var a=e(n,r.name);if(a){var o=n.packages[a],i=r.name.substr(a.length+1),s={};if(o.meta){var l=0;p(o.meta,i,function(e,t,r){r&gt;l&amp;&amp;(l=r),v(s,t,r&amp;&amp;l&gt;r)}),v(r.metadata,s)}o.format&amp;&amp;!r.metadata.loader&amp;&amp;(r.metadata.format=r.metadata.format||o.format)}return t})}})}(),function(){function t(){if(s&amp;&amp;&quot;interactive&quot;===s.script.readyState)return s.load;for(var e=0;e&lt;d.length;e++)if(&quot;interactive&quot;==d[e].script.readyState)return s=d[e],s.load}function r(e,t){return new Promise(function(e,r){t.metadata.integrity&amp;&amp;r(new Error(&quot;Subresource integrity checking is not supported in web workers.&quot;)),l=t;try{importScripts(t.address)}catch(n){l=null,r(n)}l=null,t.metadata.entry||r(new Error(t.address+&quot; did not call System.register or AMD define. If loading a global, ensure the meta format is set to global.&quot;)),e(&quot;&quot;)})}if(&quot;undefined&quot;!=typeof document)var n=document.getElementsByTagName(&quot;head&quot;)[0];var a,o,s,l=null,u=n&amp;&amp;function(){var e=document.createElement(&quot;script&quot;),t=&quot;undefined&quot;!=typeof opera&amp;&amp;&quot;[object Opera]&quot;===opera.toString();return e.attachEvent&amp;&amp;!(e.attachEvent.toString&amp;&amp;e.attachEvent.toString().indexOf(&quot;[native code&quot;)&lt;0)&amp;&amp;!t}(),d=[],c=0,f=[];i(&quot;pushRegister_&quot;,function(e){return function(r){return e.call(this,r)?!1:(l?this.reduceRegister_(l,r):u?this.reduceRegister_(t(),r):c?f.push(r):this.reduceRegister_(null,r),!0)}}),i(&quot;fetch&quot;,function(t){return function(i){var l=this;return&quot;json&quot;!=i.metadata.format&amp;&amp;i.metadata.scriptLoad&amp;&amp;(F||A)?A?r(l,i):new Promise(function(t,r){function m(e){if(!g.readyState||&quot;loaded&quot;==g.readyState||&quot;complete&quot;==g.readyState){if(c--,i.metadata.entry||f.length){if(!u){for(var n=0;n&lt;f.length;n++)l.reduceRegister_(i,f[n]);f=[]}}else l.reduceRegister_(i);h(),i.metadata.entry||i.metadata.bundle||r(new Error(i.name+&quot; did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.&quot;)),t(&quot;&quot;)}}function p(e){h(),r(new Error(&quot;Unable to load script &quot;+i.address))}function h(){if(e.System=a,e.require=o,g.detachEvent){g.detachEvent(&quot;onreadystatechange&quot;,m);for(var t=0;t&lt;d.length;t++)d[t].script==g&amp;&amp;(s&amp;&amp;s.script==g&amp;&amp;(s=null),d.splice(t,1))}else g.removeEventListener(&quot;load&quot;,m,!1),g.removeEventListener(&quot;error&quot;,p,!1);n.removeChild(g)}var g=document.createElement(&quot;script&quot;);g.async=!0,i.metadata.crossOrigin&amp;&amp;(g.crossOrigin=i.metadata.crossOrigin),i.metadata.integrity&amp;&amp;g.setAttribute(&quot;integrity&quot;,i.metadata.integrity),u?(g.attachEvent(&quot;onreadystatechange&quot;,m),d.push({script:g,load:i})):(g.addEventListener(&quot;load&quot;,m,!1),g.addEventListener(&quot;error&quot;,p,!1)),c++,a=e.System,o=e.require,g.src=i.address,n.appendChild(g)}):t.call(this,i)}})}();var ie=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*&quot;[^&quot;]+&quot;\s*;?|\s*&#39;[^&#39;]+&#39;\s*;?)*\s*/;!function(){function t(e,r,n){if(n[e.groupIndex]=n[e.groupIndex]||[],-1==U.call(n[e.groupIndex],e)){n[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o&gt;a;a++){var i=e.normalizedDeps[a],s=r.defined[i];if(s&amp;&amp;!s.evaluated){var l=e.groupIndex+(s.declarative!=e.declarative);if(null===s.groupIndex||s.groupIndex&lt;l){if(null!==s.groupIndex&amp;&amp;(n[s.groupIndex].splice(U.call(n[s.groupIndex],s),1),0==n[s.groupIndex].length))throw new Error(&quot;Mixed dependency cycle detected&quot;);s.groupIndex=l}t(s,r,n)}}}}function n(e,r,n){if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var o=!!r.declarative==a.length%2,i=a.length-1;i&gt;=0;i--){for(var s=a[i],l=0;l&lt;s.length;l++){var d=s[l];o?u(d,n):c(d,n)}o=!o}}}function o(){}function l(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new o,importers:[]})}function u(t,r){if(!t.module){var n=r._loader.moduleRecords,a=t.module=l(t.name,n),o=t.module.exports,i=t.declare.call(e,function(e,t){if(a.locked=!0,&quot;object&quot;==typeof e)for(var r in e)o[r]=e[r];else o[e]=t;for(var n=0,i=a.importers.length;i&gt;n;n++){var s=a.importers[n];if(!s.locked){var l=U.call(s.dependencies,a),u=s.setters[l];u&amp;&amp;u(o)}}return a.locked=!1,t},{id:t.name});if(i=i||{setters:[],execute:function(){}},a.setters=i.setters,a.execute=i.execute,!a.setters||!a.execute)throw new TypeError(&quot;Invalid System.register form for &quot;+t.name);for(var s=0,d=t.normalizedDeps.length;d&gt;s;s++){var c,f=t.normalizedDeps[s],m=r.defined[f],p=n[f];p?c=p.exports:m&amp;&amp;!m.declarative?c=m.esModule:m?(u(m,r),p=m.module,c=p.exports):c=r.get(f),p&amp;&amp;p.importers?(p.importers.push(a),a.dependencies.push(p)):a.dependencies.push(null);for(var h=t.originalIndices[s],g=0,v=h.length;v&gt;g;++g){var b=h[g];a.setters[b]&amp;&amp;a.setters[b](c)}}}}function d(e,t){var r,n=t.defined[e];if(n)n.declarative?f(e,n,[],t):n.evaluated||c(n,t),r=n.module.exports;else if(r=t.get(e),!r)throw new Error(&quot;Unable to load dependency &quot;+e+&quot;.&quot;);return(!n||n.declarative)&amp;&amp;r&amp;&amp;r.__useDefault?r[&quot;default&quot;]:r}function c(t,n){if(!t.module){var a={},o=t.module={exports:a,id:t.name};if(!t.executingRequire)for(var i=0,s=t.normalizedDeps.length;s&gt;i;i++){var l=t.normalizedDeps[i],u=n.defined[l];u&amp;&amp;c(u,n)}t.evaluated=!0;var f=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a&gt;r;r++)if(t.deps[r]==e)return d(t.normalizedDeps[r],n);var o=n.normalizeSync(e,t.name);if(-1!=U.call(t.normalizedDeps,o))return d(o,n);throw new Error(&quot;Module &quot;+e+&quot; not declared as a dependency of &quot;+t.name)},a,o);f&amp;&amp;(o.exports=f),a=o.exports,a&amp;&amp;(a.__esModule||a instanceof r)?t.esModule=n.newModule(a):t.esmExports&amp;&amp;a!==e?t.esModule=n.newModule(p(a)):t.esModule=n.newModule({&quot;default&quot;:a})}}function f(t,r,n,a){if(r&amp;&amp;!r.evaluated&amp;&amp;r.declarative){n.push(t);for(var o=0,i=r.normalizedDeps.length;i&gt;o;o++){var s=r.normalizedDeps[o];-1==U.call(n,s)&amp;&amp;(a.defined[s]?f(s,a.defined[s],n,a):a.get(s))}r.evaluated||(r.evaluated=!0,r.module.execute.call(e))}}a.prototype.register=function(e,t,r){if(&quot;string&quot;!=typeof e&amp;&amp;(r=t,t=e,e=null),&quot;boolean&quot;==typeof r)return this.registerDynamic.apply(this,arguments);var n=M();n.name=e&amp;&amp;(this.decanonicalize||this.normalize).call(this,e),n.declarative=!0,n.deps=t,n.declare=r,this.pushRegister_({amd:!1,entry:n})},a.prototype.registerDynamic=function(e,t,r,n){&quot;string&quot;!=typeof e&amp;&amp;(n=r,r=t,t=e,e=null);var a=M();a.name=e&amp;&amp;(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=n,a.executingRequire=r,this.pushRegister_({amd:!1,entry:a})},i(&quot;reduceRegister_&quot;,function(){return function(e,t){if(t){var r=t.entry,n=e&amp;&amp;e.metadata;if(r.name&amp;&amp;(r.name in this.defined||(this.defined[r.name]=r),n&amp;&amp;(n.bundle=!0)),!r.name||e&amp;&amp;!n.entry&amp;&amp;r.name==e.name){if(!n)throw new TypeError(&quot;Invalid System.register call. Anonymous System.register calls can only be made by modules loaded by SystemJS.import and not via script tags.&quot;);if(n.entry)throw&quot;register&quot;==n.format?new Error(&quot;Multiple anonymous System.register calls in module &quot;+e.name+&quot;. If loading a bundle, ensure all the System.register calls are named.&quot;):new Error(&quot;Module &quot;+e.name+&quot; interpreted as &quot;+n.format+&quot; module format, but called System.register.&quot;);n.format||(n.format=&quot;register&quot;),n.entry=r}}}}),s(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),D(o,&quot;toString&quot;,{value:function(){return&quot;Module&quot;}}),i(&quot;delete&quot;,function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),i(&quot;fetch&quot;,function(e){return function(t){return this.defined[t.name]?(t.metadata.format=&quot;defined&quot;,&quot;&quot;):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),i(&quot;translate&quot;,function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.apply(this,arguments)).then(function(e){return(&quot;register&quot;==t.metadata.format||!t.metadata.format&amp;&amp;O(t.source))&amp;&amp;(t.metadata.format=&quot;register&quot;),e})}}),i(&quot;load&quot;,function(e){return function(t){var r=this,a=r.defined[t];return!a||a.deps.length?e.apply(this,arguments):(a.originalIndices=a.normalizedDeps=[],n(t,a,r),f(t,a,[],r),a.esModule||(a.esModule=r.newModule(a.module.exports)),r.trace||(r.defined[t]=void 0),r.set(t,a.esModule),Promise.resolve())}}),i(&quot;instantiate&quot;,function(e){return function(t){&quot;detect&quot;==t.metadata.format&amp;&amp;(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps)),r.deps=r.deps.concat(t.metadata.deps);else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&amp;&amp;t.metadata.bundle||&quot;register&quot;!=t.metadata.format&amp;&amp;&quot;esm&quot;!=t.metadata.format&amp;&amp;&quot;es6&quot;!=t.metadata.format)){if(&quot;undefined&quot;!=typeof te&amp;&amp;te.call(a,t),!t.metadata.entry&amp;&amp;!t.metadata.bundle)throw new Error(t.name+&quot; detected as &quot;+t.metadata.format+&quot; but didn&#39;t execute.&quot;);r=t.metadata.entry,r&amp;&amp;t.metadata.deps&amp;&amp;(r.deps=r.deps.concat(t.metadata.deps))}r||(r=M(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=m(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var i=[],s=0,l=r.deps.length;l&gt;s;s++)i.push(Promise.resolve(a.normalize(r.deps[s],t.name)));return Promise.all(i).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,r,a),f(t.name,r,[],a),r.esModule||(r.esModule=a.newModule(r.module.exports)),a.trace||(a.defined[t.name]=void 0),r.esModule}}})}})}(),function(){var t=/(^\s*|[}\);\n]\s*)(import\s*([&#39;&quot;]|(\*\s+as\s+)?[^&quot;&#39;\(\)\n;]+\s*from\s*[&#39;&quot;]|\{)|export\s+\*\s+from\s+[&quot;&#39;]|export\s*(\{|default|function|class|var|const|let|async\s+function))/,r=/\$traceurRuntime\s*\./,n=/babelHelpers\s*\./;i(&quot;translate&quot;,function(a){return function(o){var i=this,s=arguments;return a.apply(i,s).then(function(a){if(&quot;esm&quot;==o.metadata.format||&quot;es6&quot;==o.metadata.format||!o.metadata.format&amp;&amp;a.match(t)){if(&quot;es6&quot;==o.metadata.format&amp;&amp;w.call(i,&quot;Module &quot;+o.name+&#39; has metadata setting its format to &quot;es6&quot;, which is deprecated.\nThis should be updated to &quot;esm&quot;.&#39;),o.metadata.format=&quot;esm&quot;,o.metadata.deps){for(var l=&quot;&quot;,u=0;u&lt;o.metadata.deps.length;u++)l+=&#39;import &quot;&#39;+o.metadata.deps[u]+&#39;&quot;; &#39;;o.source=l+a}if(i.transpiler===!1){if(i.builder)return a;throw new TypeError(&quot;Unable to dynamically transpile ES module as SystemJS.transpiler set to false.&quot;)}return i._loader.loadedTranspiler=i._loader.loadedTranspiler||!1,i.pluginLoader&amp;&amp;(i.pluginLoader._loader.loadedTranspiler=i._loader.loadedTranspiler||!1),(i._loader.transpilerPromise||(i._loader.transpilerPromise=Promise.resolve(e[&quot;typescript&quot;==i.transpiler?&quot;ts&quot;:i.transpiler]||(i.pluginLoader||i)[&quot;import&quot;](i.transpiler)))).then(function(e){return i._loader.loadedTranspilerRuntime=!0,e.translate?e==o.metadata.loaderModule?o.source:(&quot;string&quot;==typeof o.metadata.sourceMap&amp;&amp;(o.metadata.sourceMap=JSON.parse(o.metadata.sourceMap)),Promise.resolve(e.translate.apply(i,s)).then(function(e){var t=o.metadata.sourceMap;if(t&amp;&amp;&quot;object&quot;==typeof t){var r=o.address.split(&quot;!&quot;)[0];t.file&amp;&amp;t.file!=o.address||(t.file=r+&quot;!transpiled&quot;),(!t.sources||t.sources.length&lt;=1&amp;&amp;(!t.sources[0]||t.sources[0]==o.address))&amp;&amp;(t.sources=[r])}return&quot;esm&quot;==o.metadata.format&amp;&amp;!i.builder&amp;&amp;O(e)&amp;&amp;(o.metadata.format=&quot;register&quot;),e})):(i.builder&amp;&amp;(o.metadata.originalSource=o.source),V.call(i,o).then(function(e){return o.metadata.sourceMap=void 0,e}))})}if(i.transpiler===!1)return a;if(i._loader.loadedTranspiler!==!1||&quot;traceur&quot;!=i.transpiler&amp;&amp;&quot;typescript&quot;!=i.transpiler&amp;&amp;&quot;babel&quot;!=i.transpiler||o.name!=i.normalizeSync(i.transpiler)||(a.length&gt;100&amp;&amp;!o.metadata.format&amp;&amp;(o.metadata.format=&quot;global&quot;,&quot;traceur&quot;===i.transpiler&amp;&amp;(o.metadata.exports=&quot;traceur&quot;),&quot;typescript&quot;===i.transpiler&amp;&amp;(o.metadata.exports=&quot;ts&quot;)),i._loader.loadedTranspiler=!0),i._loader.loadedTranspilerRuntime===!1&amp;&amp;(o.name==i.normalizeSync(&quot;traceur-runtime&quot;)||o.name==i.normalizeSync(&quot;babel/external-helpers*&quot;))&amp;&amp;(a.length&gt;100&amp;&amp;(o.metadata.format=o.metadata.format||&quot;global&quot;),i._loader.loadedTranspilerRuntime=!0),(&quot;register&quot;==o.metadata.format||o.metadata.bundle)&amp;&amp;i._loader.loadedTranspilerRuntime!==!0){if(&quot;traceur&quot;==i.transpiler&amp;&amp;!e.$traceurRuntime&amp;&amp;o.source.match(r))return i._loader.loadedTranspilerRuntime=i._loader.loadedTranspilerRuntime||!1,i[&quot;import&quot;](&quot;traceur-runtime&quot;).then(function(){return a});if(&quot;babel&quot;==i.transpiler&amp;&amp;!e.babelHelpers&amp;&amp;o.source.match(n))return i._loader.loadedTranspilerRuntime=i._loader.loadedTranspilerRuntime||!1,i[&quot;import&quot;](&quot;babel/external-helpers&quot;).then(function(){return a})}return a})}})}();var se=&quot;undefined&quot;!=typeof self?&quot;self&quot;:&quot;global&quot;;i(&quot;fetch&quot;,function(e){return function(t){return t.metadata.exports&amp;&amp;!t.metadata.format&amp;&amp;(t.metadata.format=&quot;global&quot;),e.call(this,t)}}),i(&quot;instantiate&quot;,function(e){return function(t){var r=this;if(t.metadata.format||(t.metadata.format=&quot;global&quot;),&quot;global&quot;==t.metadata.format&amp;&amp;!t.metadata.entry){var n=M();t.metadata.entry=n,n.deps=[];for(var a in t.metadata.globals){var o=t.metadata.globals[a];o&amp;&amp;n.deps.push(o)}n.execute=function(e,n,a){var o;if(t.metadata.globals){o={};for(var i in t.metadata.globals)t.metadata.globals[i]&amp;&amp;(o[i]=e(t.metadata.globals[i]))}var s=t.metadata.exports;s&amp;&amp;(t.source+=&quot;\n&quot;+se+&#39;[&quot;&#39;+s+&#39;&quot;] = &#39;+s+&quot;;&quot;);var l=r.get(&quot;@@global-helpers&quot;).prepareGlobal(a.id,s,o,!!t.metadata.encapsulateGlobal);return te.call(r,t),l()}}return e.call(this,t)}}),i(&quot;reduceRegister_&quot;,function(e){return function(t,r){if(r||!t.metadata.exports&amp;&amp;(!A||&quot;global&quot;!=t.metadata.format))return e.call(this,t,r);t.metadata.format=&quot;global&quot;;var n=t.metadata.entry=M();n.deps=t.metadata.deps;var a=R(t.metadata.exports);n.execute=function(){return a}}}),s(function(t){return function(){function r(t){if(Object.keys)Object.keys(e).forEach(t);else for(var r in e)i.call(e,r)&amp;&amp;t(r)}function n(t){r(function(r){if(-1==U.call(s,r)){try{var n=e[r]}catch(a){s.push(r)}t(r,n)}})}var a=this;t.call(a);var o,i=Object.prototype.hasOwnProperty,s=[&quot;_g&quot;,&quot;sessionStorage&quot;,&quot;localStorage&quot;,&quot;clipboardData&quot;,&quot;frames&quot;,&quot;frameElement&quot;,&quot;external&quot;,&quot;mozAnimationStartTime&quot;,&quot;webkitStorageInfo&quot;,&quot;webkitIndexedDB&quot;,&quot;mozInnerScreenY&quot;,&quot;mozInnerScreenX&quot;];a.set(&quot;@@global-helpers&quot;,a.newModule({prepareGlobal:function(t,r,a,i){var s=e.define;e.define=void 0;var l;if(a){l={};for(var u in a)l[u]=e[u],e[u]=a[u]}return r||(o={},n(function(e,t){o[e]=t})),function(){var t,a=r?R(r):{},u=!!r;if((!r||i)&amp;&amp;n(function(n,s){o[n]!==s&amp;&amp;&quot;undefined&quot;!=typeof s&amp;&amp;(i&amp;&amp;(e[n]=void 0),r||(a[n]=s,&quot;undefined&quot;!=typeof t?u||t===s||(u=!0):t=s))}),a=u?a:t,l)for(var d in l)e[d]=l[d];return e.define=s,a}}}))}}),function(){function t(e){function t(e,t){for(var r=0;r&lt;e.length;r++)if(e[r][0]&lt;t.index&amp;&amp;e[r][1]&gt;t.index)return!0;return!1}n.lastIndex=a.lastIndex=o.lastIndex=0;var r,i=[],s=[],l=[];if(e.length/e.split(&quot;\n&quot;).length&lt;200){for(;r=o.exec(e);)s.push([r.index,r.index+r[0].length]);for(;r=a.exec(e);)t(s,r)||l.push([r.index+r[1].length,r.index+r[0].length-1])}for(;r=n.exec(e);)if(!t(s,r)&amp;&amp;!t(l,r)){var u=r[1].substr(1,r[1].length-2);if(u.match(/&quot;|&#39;/))continue;&quot;/&quot;==u[u.length-1]&amp;&amp;(u=u.substr(0,u.length-1)),i.push(u)}return i}var r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[[&#39;&quot;]|\.)|module(\.exports|\[&#39;exports&#39;\]|\[&quot;exports&quot;\])\s*(\[[&#39;&quot;]|[=,\.]))/,n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.&quot;&#39;])require\s*\(\s*(&quot;[^&quot;\\]*(?:\\.[^&quot;\\]*)*&quot;|&#39;[^&#39;\\]*(?:\\.[^&#39;\\]*)*&#39;)\s*\)/g,a=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/(&quot;[^&quot;\\\n\r]*(\\.[^&quot;\\\n\r]*)*&quot;|&#39;[^&#39;\\\n\r]*(\\.[^&#39;\\\n\r]*)*&#39;)/g,s=/^\#\!.*/;i(&quot;instantiate&quot;,function(a){return function(o){var i=this;if(o.metadata.format||(r.lastIndex=0,n.lastIndex=0,(n.exec(o.source)||r.exec(o.source))&amp;&amp;(o.metadata.format=&quot;cjs&quot;)),&quot;cjs&quot;==o.metadata.format){var l=o.metadata.deps,u=o.metadata.cjsRequireDetection===!1?[]:t(o.source);for(var d in o.metadata.globals)o.metadata.globals[d]&amp;&amp;u.push(o.metadata.globals[d]);var c=M();o.metadata.entry=c,c.deps=u,c.executingRequire=!0,c.execute=function(t,r,n){function a(e){return&quot;/&quot;==e[e.length-1]&amp;&amp;(e=e.substr(0,e.length-1)),t.apply(this,arguments)}if(a.resolve=function(e){return i.get(&quot;@@cjs-helpers&quot;).requireResolve(e,n.id)},n.paths=[],n.require=t,!o.metadata.cjsDeferDepsExecute)for(var u=0;u&lt;l.length;u++)a(l[u]);var d=i.get(&quot;@@cjs-helpers&quot;).getPathVars(n.id),c={exports:r,args:[a,r,n,d.filename,d.dirname,e,e]},f=&quot;(function(require, exports, module, __filename, __dirname, global, GLOBAL&quot;;if(o.metadata.globals)for(var m in o.metadata.globals)c.args.push(a(o.metadata.globals[m])),f+=&quot;, &quot;+m;var p=e.define;e.define=void 0,e.__cjsWrapper=c,o.source=f+&quot;) {&quot;+o.source.replace(s,&quot;&quot;)+&quot;\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);&quot;,te.call(i,o),e.__cjsWrapper=void 0,e.define=p}}return a.call(i,o)}})}(),s(function(e){return function(){function t(e){return&quot;file:///&quot;==e.substr(0,8)?e.substr(7+!!q):n&amp;&amp;e.substr(0,n.length)==n?e.substr(n.length):e}var r=this;if(e.call(r),&quot;undefined&quot;!=typeof window&amp;&amp;&quot;undefined&quot;!=typeof document&amp;&amp;window.location)var n=location.protocol+&quot;//&quot;+location.hostname+(location.port?&quot;:&quot;+location.port:&quot;&quot;);r.set(&quot;@@cjs-helpers&quot;,r.newModule({requireResolve:function(e,n){return t(r.normalizeSync(e,n))},getPathVars:function(e){var r,n=e.lastIndexOf(&quot;!&quot;);r=-1!=n?e.substr(0,n):e;var a=r.split(&quot;/&quot;);return a.pop(),a=a.join(&quot;/&quot;),{filename:t(r),dirname:t(a)}}}))}}),i(&quot;fetch&quot;,function(t){return function(r){return r.metadata.scriptLoad&amp;&amp;F&amp;&amp;(e.define=this.amdDefine),t.call(this,r)}}),s(function(t){return function(){function r(e,t){e=e.replace(s,&quot;&quot;);var r=e.match(d),n=(r[1].split(&quot;,&quot;)[t]||&quot;require&quot;).replace(c,&quot;&quot;),a=f[n]||(f[n]=new RegExp(l+n+u,&quot;g&quot;));a.lastIndex=0;for(var o,i=[];o=a.exec(e);)i.push(o[2]||o[3]);return i}function n(e,t,r,a){if(&quot;object&quot;==typeof e&amp;&amp;!(e instanceof Array))return n.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(&quot;string&quot;==typeof e&amp;&amp;&quot;function&quot;==typeof t&amp;&amp;(e=[e]),!(e instanceof Array)){if(&quot;string&quot;==typeof e){var i=o.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=e.substr(e.length-3,3),s=o.decanonicalize(e,a);i&amp;&amp;&quot;.js&quot;==s.substr(s.length-3,3)&amp;&amp;(s=s.substr(0,s.length-3));var l=o.get(s);if(!l)throw new Error(&#39;Module not already loaded loading &quot;&#39;+e+&#39;&quot; as &#39;+s+(a?&#39; from &quot;&#39;+a+&#39;&quot;.&#39;:&quot;.&quot;));return l.__useDefault?l[&quot;default&quot;]:l}throw new TypeError(&quot;Invalid require&quot;)}for(var u=[],d=0;d&lt;e.length;d++)u.push(o[&quot;import&quot;](e[d],a));Promise.all(u).then(function(e){t&amp;&amp;t.apply(null,e)},r)}function a(t,a,i){function s(t,r,s){function c(e,r,a){return&quot;string&quot;==typeof e&amp;&amp;&quot;function&quot;!=typeof r?t(e):n.call(o,e,r,a,s.id)}for(var f=[],m=0;m&lt;a.length;m++)f.push(t(a[m]));s.uri=s.id,s.config=function(){},-1!=d&amp;&amp;f.splice(d,0,s),-1!=u&amp;&amp;f.splice(u,0,r),-1!=l&amp;&amp;(c.toUrl=function(e){var t=o.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=e.substr(e.length-3,3),r=o.decanonicalize(e,s.id);return t&amp;&amp;&quot;.js&quot;==r.substr(r.length-3,3)&amp;&amp;(r=r.substr(0,r.length-3)),r},f.splice(l,0,c));var p=e.require;e.require=n;var h=i.apply(-1==u?e:r,f);return e.require=p,&quot;undefined&quot;==typeof h&amp;&amp;s&amp;&amp;(h=s.exports),&quot;undefined&quot;!=typeof h?h:void 0}&quot;string&quot;!=typeof t&amp;&amp;(i=a,a=t,t=null),a instanceof Array||(i=a,a=[&quot;require&quot;,&quot;exports&quot;,&quot;module&quot;].splice(0,i.length)),&quot;function&quot;!=typeof i&amp;&amp;(i=function(e){return function(){return e}}(i)),void 0===a[a.length-1]&amp;&amp;a.pop();var l,u,d;-1!=(l=U.call(a,&quot;require&quot;))&amp;&amp;(a.splice(l,1),t||(a=a.concat(r(i.toString(),l)))),-1!=(u=U.call(a,&quot;exports&quot;))&amp;&amp;a.splice(u,1),-1!=(d=U.call(a,&quot;module&quot;))&amp;&amp;a.splice(d,1);var c=M();c.name=t&amp;&amp;(o.decanonicalize||o.normalize).call(o,t),c.deps=a,c.execute=s,o.pushRegister_({amd:!0,entry:c})}var o=this;t.call(this);var s=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l=&quot;(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])&quot;,u=&quot;\\s*\\(\\s*(\&quot;([^\&quot;]+)\&quot;|&#39;([^&#39;]+)&#39;)\\s*\\)&quot;,d=/\(([^\)]*)\)/,c=/^\s+|\s+$/g,f={};a.amd={},i(&quot;reduceRegister_&quot;,function(e){return function(t,r){if(!r||!r.amd)return e.call(this,t,r);var n=t&amp;&amp;t.metadata,a=r.entry;if(n)if(n.format&amp;&amp;&quot;detect&quot;!=n.format){if(!a.name&amp;&amp;&quot;amd&quot;!=n.format)throw new Error(&quot;AMD define called while executing &quot;+n.format+&quot; module &quot;+t.name)}else n.format=&quot;amd&quot;;if(a.name)n&amp;&amp;(n.entry||n.bundle?n.entry&amp;&amp;n.entry.name&amp;&amp;n.entry.name!=t.name&amp;&amp;(n.entry=void 0):n.entry=a,n.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!n)throw new TypeError(&quot;Unexpected anonymous AMD define.&quot;);if(n.entry&amp;&amp;!n.entry.name)throw new Error(&quot;Multiple anonymous defines in module &quot;+t.name);n.entry=a}}}),o.amdDefine=a,o.amdRequire=n}}),function(){var t=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*(&quot;[^&quot;]+&quot;\s*,\s*|&#39;[^&#39;]+&#39;\s*,\s*)?\s*(\[(\s*((&quot;[^&quot;]+&quot;|&#39;[^&#39;]+&#39;)\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*(&quot;[^&quot;]+&quot;|&#39;[^&#39;]+&#39;)\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;i(&quot;instantiate&quot;,function(r){return function(n){var a=this;if(&quot;amd&quot;==n.metadata.format||!n.metadata.format&amp;&amp;n.source.match(t))if(n.metadata.format=&quot;amd&quot;,a.builder||a.execute===!1)n.metadata.execute=function(){return n.metadata.builderExecute.apply(this,arguments)};else{var o=e.define;e.define=this.amdDefine;try{te.call(a,n)}finally{e.define=o}if(!n.metadata.entry&amp;&amp;!n.metadata.bundle)throw new TypeError(&quot;AMD module &quot;+n.name+&quot; did not define&quot;)}return r.call(a,n)}})}(),function(){function e(e,t){if(t){var r;if(e.pluginFirst){if(-1!=(r=t.lastIndexOf(&quot;!&quot;)))return t.substr(r+1)}else if(-1!=(r=t.indexOf(&quot;!&quot;)))return t.substr(0,r);return t}}function t(e,t){var r,n,a=t.lastIndexOf(&quot;!&quot;);return-1!=a?(e.pluginFirst?(r=t.substr(a+1),n=t.substr(0,a)):(r=t.substr(0,a),n=t.substr(a+1)||r.substr(r.lastIndexOf(&quot;.&quot;)+1)),{argument:r,plugin:n}):void 0}function r(e,t,r,n){return n&amp;&amp;&quot;.js&quot;==t.substr(t.length-3,3)&amp;&amp;(t=t.substr(0,t.length-3)),e.pluginFirst?r+&quot;!&quot;+t:t+&quot;!&quot;+r}function n(e,t){return e.defaultJSExtensions&amp;&amp;&quot;.js&quot;!=t.substr(t.length-3,3)}function a(a){return function(o,i,s){var l=this,u=t(l,o);if(i=e(this,i),!u)return a.call(this,o,i,s);var d=l.normalizeSync(u.argument,i,!0),c=l.normalizeSync(u.plugin,i,!0);return r(l,d,c,n(l,u.argument))}}i(&quot;decanonicalize&quot;,a),i(&quot;normalizeSync&quot;,a),i(&quot;normalize&quot;,function(a){return function(o,i,s){var l=this;i=e(this,i);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,i,!0),l.normalize(u.plugin,i,!1)]).then(function(e){return r(l,e[0],e[1],n(l,u.argument))}):a.call(l,o,i,s)}}),i(&quot;locate&quot;,function(e){return function(t){var r,n=this,a=t.name;return n.pluginFirst?-1!=(r=a.indexOf(&quot;!&quot;))&amp;&amp;(t.metadata.loader=a.substr(0,r),t.name=a.substr(r+1)):-1!=(r=a.lastIndexOf(&quot;!&quot;))&amp;&amp;(t.metadata.loader=a.substr(r+1),t.name=a.substr(0,r)),e.call(n,t).then(function(e){return-1==r&amp;&amp;t.metadata.loader?(n.pluginLoader||n).normalize(t.metadata.loader,t.name).then(function(r){return t.metadata.loader=r,e}):e}).then(function(e){var r=t.metadata.loader;if(!r)return e;if(t.name==r)throw new Error(&quot;Plugin &quot;+r+&quot; cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.&quot;);if(n.defined&amp;&amp;n.defined[a])return e;var o=n.pluginLoader||n;return o[&quot;import&quot;](r).then(function(r){return t.metadata.loaderModule=r,t.address=e,r.locate?r.locate.call(n,t):e})})}}),i(&quot;fetch&quot;,function(e){return function(t){var r=this;return t.metadata.loaderModule&amp;&amp;t.metadata.loaderModule.fetch&amp;&amp;&quot;defined&quot;!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(r,t,function(t){return e.call(r,t)})):e.call(r,t)}}),i(&quot;translate&quot;,function(e){return function(t){var r=this,n=arguments;return t.metadata.loaderModule&amp;&amp;t.metadata.loaderModule.translate&amp;&amp;&quot;defined&quot;!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.apply(r,n)).then(function(a){var o=t.metadata.sourceMap;if(o){if(&quot;object&quot;!=typeof o)throw new Error(&quot;load.metadata.sourceMap must be set to an object.&quot;);var i=t.address.split(&quot;!&quot;)[0];o.file&amp;&amp;o.file!=t.address||(o.file=i+&quot;!transpiled&quot;),(!o.sources||o.sources.length&lt;=1&amp;&amp;(!o.sources[0]||o.sources[0]==t.address))&amp;&amp;(o.sources=[i])}return&quot;string&quot;==typeof a?t.source=a:w.call(this,&quot;Plugin &quot;+t.metadata.loader+&quot; should return the source in translate, instead of setting load.source directly. This support will be deprecated.&quot;),e.apply(r,n)}):e.apply(r,n)}}),i(&quot;instantiate&quot;,function(e){return function(t){var r=this,n=!1;return t.metadata.loaderModule&amp;&amp;t.metadata.loaderModule.instantiate&amp;&amp;!r.builder&amp;&amp;&quot;defined&quot;!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(r,t,function(t){if(n)throw new Error(&quot;Instantiate must only be called once.&quot;);return n=!0,e.call(r,t)})).then(function(a){return n?a:(t.metadata.entry=M(),t.metadata.entry.execute=function(){return a},t.metadata.entry.deps=t.metadata.deps,t.metadata.format=&quot;defined&quot;,e.call(r,t))}):e.call(r,t)}})}();var le=[&quot;browser&quot;,&quot;node&quot;,&quot;dev&quot;,&quot;build&quot;,&quot;production&quot;,&quot;default&quot;],ue=/#\{[^\}]+\}/;i(&quot;normalize&quot;,function(e){return function(t,r,n){var a=this;return L.call(a,t,r).then(function(t){return e.call(a,t,r,n)}).then(function(e){return C.call(a,e,r)})}}),function(){i(&quot;fetch&quot;,function(e){return function(t){var r=t.metadata.alias,n=t.metadata.deps||[];if(r){t.metadata.format=&quot;defined&quot;;var a=M();return this.defined[t.name]=a,a.declarative=!0,a.deps=n.concat([r]),a.declare=function(e){return{setters:[function(t){for(var r in t)e(r,t[r]);t.__useDefault&amp;&amp;(a.module.exports.__useDefault=!0)}],execute:function(){}}},&quot;&quot;}return e.call(this,t)}})}(),function(){function e(e,t,r){for(var n,a=t.split(&quot;.&quot;);a.length&gt;1;)n=a.shift(),e=e[n]=e[n]||{};n=a.shift(),n in e||(e[n]=r)}s(function(e){return function(){this.meta={},e.call(this)}}),i(&quot;locate&quot;,function(e){return function(t){var r,n=this.meta,a=t.name,o=0;for(var i in n)if(r=i.indexOf(&quot;*&quot;),-1!==r&amp;&amp;i.substr(0,r)===a.substr(0,r)&amp;&amp;i.substr(r+1)===a.substr(a.length-i.length+r+1)){var s=i.split(&quot;/&quot;).length;s&gt;o&amp;&amp;(o=s),v(t.metadata,n[i],o!=s)}return n[a]&amp;&amp;v(t.metadata,n[a]),e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*&quot;[^&quot;]+&quot;\s*;?|\s*&#39;[^&#39;]+&#39;\s*;?)+/,r=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|&quot;[^&quot;]+&quot;\s*;?|&#39;[^&#39;]+&#39;\s*;?/g;i(&quot;translate&quot;,function(n){return function(a){if(&quot;defined&quot;==a.metadata.format)return a.metadata.deps=a.metadata.deps||[],Promise.resolve(a.source);var o=a.source.match(t);if(o)for(var i=o[0].match(r),s=0;s&lt;i.length;s++){var l=i[s],u=l.length,d=l.substr(0,1);if(&quot;;&quot;==l.substr(u-1,1)&amp;&amp;u--,&#39;&quot;&#39;==d||&quot;&#39;&quot;==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(&quot; &quot;));if(f){var m=c.substr(f.length+1,c.length-f.length-1);&quot;[]&quot;==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(w.call(this,&quot;Module &quot;+a.name+&#39; contains deprecated &quot;deps &#39;+m+&#39;&quot; meta syntax.\nThis should be updated to &quot;deps[] &#39;+m+&#39;&quot; for pushing to array meta.&#39;),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return n.apply(this,arguments)}})}(),function(){s(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),i(&quot;locate&quot;,function(e){return function(t){var r=this,n=!1;if(!(t.name in r.defined))for(var a in r.bundles){for(var o=0;o&lt;r.bundles[a].length;o++){var i=r.bundles[a][o];if(i==t.name){n=!0;break}if(-1!=i.indexOf(&quot;*&quot;)){var s=i.split(&quot;*&quot;);if(2!=s.length){r.bundles[a].splice(o--,1);continue}if(t.name.substring(0,s[0].length)==s[0]&amp;&amp;t.name.substr(t.name.length-s[1].length,s[1].length)==s[1]&amp;&amp;-1==t.name.substr(s[0].length,t.name.length-s[1].length-s[0].length).indexOf(&quot;/&quot;)){n=!0;break}}}if(n)return r[&quot;import&quot;](a).then(function(){return e.call(r,t)})}return e.call(r,t)}})}(),function(){s(function(e){return function(){e.call(this),this.depCache={}}}),i(&quot;locate&quot;,function(e){return function(t){var r=this,n=r.depCache[t.name];if(n)for(var a=0;a&lt;n.length;a++)r[&quot;import&quot;](n[a],t.name);return e.call(r,t)}})}(),G=new a,e.SystemJS=G,G.version=&quot;0.19.35 Standard&quot;,&quot;object&quot;==typeof module&amp;&amp;module.exports&amp;&amp;&quot;object&quot;==typeof exports&amp;&amp;(module.exports=G),e.System=G}(&quot;undefined&quot;!=typeof self?self:global)}var t=&quot;undefined&quot;==typeof Promise;if(&quot;undefined&quot;!=typeof document){var r=document.getElementsByTagName(&quot;script&quot;);if($__curScript=r[r.length-1],($__curScript.defer||$__curScript.async)&amp;&amp;($__curScript=document.currentScript),t){var n=$__curScript.src,a=n.substr(0,n.lastIndexOf(&quot;/&quot;)+1);window.systemJSBootstrap=e,document.write(&#39;&lt;script type=&quot;text/javascript&quot; src=&quot;&#39;+a+&#39;system-polyfills.js&quot;&gt;&lt;/script&gt;&#39;)}else e()}else if(&quot;undefined&quot;!=typeof importScripts){var a=&quot;&quot;;try{throw new Error(&quot;_&quot;)}catch(o){o.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){$__curScript={src:t},a=t.replace(/\/[^\/]*$/,&quot;/&quot;)})}t&amp;&amp;importScripts(a+&quot;system-polyfills.js&quot;),e()}else $__curScript=&quot;undefined&quot;!=typeof __filename?{src:__filename}:null,e()}();</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=system.js.map</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.12831s from github-fe165-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-QEzdGt0fcQ2wFqAuXjH/+KkInRT/DCJ9+GK3gIhtt9U=" src="https://assets-cdn.github.com/assets/frameworks-404cdd1add1f710db016a02e5e31fff8a9089d14ff0c227df862b780886db7d5.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-ACdL4CyoNxf9JsEhfXLq1LJXyEdYG2x0l60KiMzSByM=" src="https://assets-cdn.github.com/assets/github-00274be02ca83717fd26c1217d72ead4b257c847581b6c7497ad0a88ccd20723.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

